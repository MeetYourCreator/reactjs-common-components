export interface SplitViewPanelsProps {
  leftPanel: React.ReactElement;
  rightPanel: React.ReactElement;
  className?: string;
}

export type LeftPanelProps = {
  leftWidth: number | undefined;
  setLeftWidth: (value: number) => void;
  children: any;
};
