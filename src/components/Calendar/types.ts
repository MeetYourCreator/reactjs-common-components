export interface HeaderProps {
  dateDisplay: string;
  onBack: () => void;
  onNext: () => void;
}
export interface DayProps {
  date: any;
  onSelectedDate: any;
}

export interface DateObj {
  value: string;
  isCurrentDay: boolean;
  date: string;
}
