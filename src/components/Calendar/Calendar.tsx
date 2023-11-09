import { useState } from 'react';
import { Day } from './Day';
import { Header } from './Header';
import { useDate } from '../../hooks/useDate';
import './styles.css';

export const Calendar = () => {
  const [nav, setNav] = useState<number>(0);
  const { days, dateDisplay } = useDate(nav);

  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return (
    <>
      <Header
        dateDisplay={dateDisplay}
        onNext={() => setNav(nav + 1)}
        onBack={() => setNav(nav - 1)}
      />
      <header className="calendarHeader">
        {weekdays.map((weekday) => {
          return <div>{weekday}</div>;
        })}
      </header>
      <div className="calendarBody">
        {days.map((date, index) => {
          return <Day key={index} date={date} />;
        })}
      </div>
    </>
  );
};
