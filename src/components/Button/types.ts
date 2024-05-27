import React from 'react';
import { ComponentProps } from '../types';

export interface ButtonProps extends ComponentProps {
  name?: string;
  icon?: JSX.Element;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
