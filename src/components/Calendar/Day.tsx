import { DayProps } from './types';

export const Day = ({ date, onSelectedDate, styles }: DayProps) => {
  return date.value === 'padding' ? (
    <div></div>
  ) : (
    <div onClick={onSelectedDate} className="calendarDay" style={styles}>
      {date.value}
    </div>
  );
};
