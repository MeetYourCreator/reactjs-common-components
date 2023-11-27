import { ComponentProps } from '../types';

export interface ButtonProps extends ComponentProps {
  name?: string;
  icon?: any;
  onClick?: () => void;
  onMouseEnter?: any;
  onMouseLeave?: any;
}
