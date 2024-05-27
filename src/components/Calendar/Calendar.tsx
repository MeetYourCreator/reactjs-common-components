import { useState, useContext } from 'react';
import { DateContext } from '../../context';
import { Day } from './Day';
import { Header } from './Header';
import { useDate } from '../../hooks/useDate';
import { DateObj } from './types';
import { ComponentProps } from '../types';
import './styles.css';

export const Calendar = ({ styles }: ComponentProps) => {
  const [nav, setNav] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useContext<any>(DateContext);
  const { days, dateDisplay } = useDate(nav);

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <>
      <Header
        dateDisplay={dateDisplay}
        onNext={() => setNav(nav + 1)}
        onBack={() => setNav(nav - 1)}
      />
      <header className="calendarHeader" style={styles}>
        {weekdays.map((weekday: string) => {
          return <div>{weekday}</div>;
        })}
      </header>
      <div className="calendarBody">
        {days.map((date: DateObj, index: number) => {
          return (
            <Day
              key={index}
              date={date}
              onSelectedDate={() => setSelectedDate(date.date)}
            />
          );
        })}
      </div>
    </>
  );
};
