import { ComponentProps } from '../types';

export interface HeaderProps extends ComponentProps {
  dateDisplay: string;
  onBack: () => void;
  onNext: () => void;
}
export interface DayProps extends ComponentProps {
  date: any;
  onSelectedDate: any;
}

export interface CalendarProps extends ComponentProps {}
export interface DateObj extends ComponentProps {
  value: string;
  isCurrentDay: boolean;
  date: string;
}
