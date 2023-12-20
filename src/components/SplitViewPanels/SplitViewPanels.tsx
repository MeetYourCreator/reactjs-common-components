import React, { createRef, useEffect, useState } from 'react';
import { SplitViewPanelsProps, LeftPanelProps } from './types';

import './styles.css';

const LeftPanel: React.FunctionComponent<LeftPanelProps> = ({
  leftWidth,
  setLeftWidth,
  children,
}) => {
  const leftPanelRef = createRef<HTMLDivElement>();

  useEffect(() => {
    if (leftPanelRef.current) {
      if (!leftWidth) {
        setLeftWidth(leftPanelRef.current.clientWidth);
        return;
      }
      leftPanelRef.current.style.width = `${leftWidth}px`;
    }
  }, [leftWidth, setLeftWidth, leftPanelRef]);
  return <div ref={leftPanelRef}>{children}</div>;
};

export const SplitViewPanels: React.FunctionComponent<SplitViewPanelsProps> = ({
  leftPanel,
  
  rightPanel,
  className,
}) => {
  const [leftWidth, setLeftWidth] = useState<undefined | number>(undefined);
  const [separatorXPosition, setSeparatorXPosition] = useState<
    undefined | number
  >(undefined);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const minLeftPanelWidth: number = 75;
  const splitPanelRef = createRef<HTMLDivElement>();

  const onTouchStart = (e: React.TouchEvent) => {
    setSeparatorXPosition(e.touches[0].clientX);
    setIsDragging(true);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    setSeparatorXPosition(e.clientX);
    console.log(e.clientY);
    setIsDragging(true);
  };

  const onMove = (clientX: number) => {
    if (isDragging && leftWidth && separatorXPosition) {
      const newLeftWidth = leftWidth + clientX - separatorXPosition;
      setSeparatorXPosition(clientX);
      console.log('separatorXPosition', separatorXPosition);
      if (newLeftWidth < minLeftPanelWidth) {
        setLeftWidth(minLeftPanelWidth);
        return;
      }

      if (splitPanelRef.current) {
        const splitPanelWidth = splitPanelRef.current.clientWidth;
        if (newLeftWidth > splitPanelWidth - minLeftPanelWidth) {
          setLeftWidth(splitPanelWidth - minLeftPanelWidth);
          return;
        }
      }
      setLeftWidth(newLeftWidth);
    }
  };

  const onTouchMove = (e: TouchEvent) => {
    onMove(e.touches[0].clientX);
  };

  const onMouseMove = (e: MouseEvent) => {
    e.preventDefault();
    onMove(e.clientX);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  });

  return (
    <section className={`splitView ${className ?? ''}`} ref={splitPanelRef}>
      <LeftPanel leftWidth={leftWidth} setLeftWidth={setLeftWidth}>
        {leftPanel}
      </LeftPanel>
      <div
        className="dividerHitbox"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onMouseUp={onMouseUp}
      >
        <div className="divider">
          <div>:::</div>
          <div>:::</div>
          <div>:::</div>
        </div>
      </div>
      <div className="rightPanel">{rightPanel}</div>
    </section>
  );
};
