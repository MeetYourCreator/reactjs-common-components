import { ComponentProps } from '../types';

export interface InputProps extends ComponentProps {
  type: string;
  labelId?: string;
  name?: string;
  value?: any;
  defaultValue?: any;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: () => void;
  autoComplete?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
}
