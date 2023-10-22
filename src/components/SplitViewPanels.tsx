import React, { createRef, useEffect, useState } from 'react';
import { SplitViewPanelsProps } from './types';

import './styles/split-view-panels.css';

const minWidth = 75;
const LeftPanel: React.FunctionComponent<{
  leftWidth: number | undefined;
  setLeftWidth: (value: number) => void;
  children: any;
}> = ({ leftWidth, setLeftWidth, children }) => {
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

  const splitPanelRef = createRef<HTMLDivElement>();

  const onMouseDown = (e: React.MouseEvent) => {
    setSeparatorXPosition(e.clientX);
    setIsDragging(true);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setSeparatorXPosition(e.touches[0].clientX);
    setIsDragging(true);
  };

  const onMove = (clientX: number) => {
    if (isDragging && leftWidth && separatorXPosition) {
      const newLeftWidth = leftWidth + clientX - separatorXPosition;
      setSeparatorXPosition(clientX);

      if (newLeftWidth < minWidth) {
        setLeftWidth(minWidth);
        return;
      }

      if (splitPanelRef.current) {
        const splitPanelWidth = splitPanelRef.current.clientWidth;
        if (newLeftWidth > splitPanelWidth - minWidth) {
          setLeftWidth(splitPanelWidth - minWidth);
          return;
        }
      }
      setLeftWidth(newLeftWidth);
    }
  };

  return (
    <section className="splitView">
      <LeftPanel leftWidth={leftWidth} setLeftWidth={setLeftWidth}>
        {leftPanel}
      </LeftPanel>
      <div className="divider" />
      <div className="rightPanel">{rightPanel}</div>
    </section>
  );
};
