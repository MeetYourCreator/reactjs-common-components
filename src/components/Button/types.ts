import { ComponentProps } from '../types';

export interface ButtonProps extends ComponentProps {
  name?: string;
  icon?: JSX.Element;
  onClick?: () => void;
  onMouseEnter?: any;
  onMouseLeave?: any;
}
