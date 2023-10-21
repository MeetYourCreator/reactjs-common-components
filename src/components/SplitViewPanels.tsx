import React, { createRef, useEffect, useState } from 'react';
import { SplitViewPanelsProps } from './types';

import './styles/split-view-panels.css';

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
