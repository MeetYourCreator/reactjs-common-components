import React from 'react';
import { ComponentProps } from '../types';

export interface InputProps extends ComponentProps {
  type: string;
  labelId?: string;
  name?: string;
  value?: any;
  defaultValue?: any;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
}
