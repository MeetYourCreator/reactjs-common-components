export interface HeaderProps {
  dateDisplay: string;
  onBack: () => void;
  onNext: () => void;
}
export interface DayProps {
  date: any;
}

export interface DateObj {
  date: string;
  isCurrentDay: boolean;
  value: string;
}
