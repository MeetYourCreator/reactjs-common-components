import { ComponentProps } from '../types';

export interface SplitViewPanelsProps extends ComponentProps {
  leftPanel: React.ReactElement;
  rightPanel: React.ReactElement;
  className?: string;
}

export interface LeftPanelProps extends ComponentProps {
  leftWidth: number | undefined;
  setLeftWidth: (value: number) => void;
  children: any;
}
