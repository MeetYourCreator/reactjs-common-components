import { DayProps } from './types';

export const Day = ({ date, onSelectedDate }: DayProps) => {
  return date.value === 'padding' ? (
    <div></div>
  ) : (
    <div onClick={onSelectedDate} className="calendarDay">
      {date.value}
    </div>
  );
};
