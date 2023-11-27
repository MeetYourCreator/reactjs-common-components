import { ComponentProps } from '../types';

export interface ButtonProps extends ComponentProps {
  onClick?: () => void;
  name?: string;
  icon?: any;
  //
  //
  onMouseEnter?: any;
  onMouseLeave?: any;
}
