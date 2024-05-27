import React from 'react';
import { ComponentProps } from '../types';

export interface HeaderProps extends ComponentProps {
  dateDisplay: string;
  onBack: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onNext: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export interface DayProps extends ComponentProps {
  date: any;
  onSelectedDate: any;
}
export interface DateObj extends ComponentProps {
  value: string;
  isCurrentDay: boolean;
  date: string;
}
