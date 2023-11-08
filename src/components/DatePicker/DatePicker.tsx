import { useState, useEffect } from 'react';
import { Day } from './Day';
import { Header } from './Header';
import { useBoolean } from '../useBoolean';
import './styles.css';

export const datePlaceholderArray: Array<number> = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

export const DatePicker = () => {
  const [nav, setNav] = useState<any>([]);
  const [days, setDays] = useState<Array<any>>([]);
  const [dateDisplay, setDateDisplay] = useState<string>('');

  const { setIsTrue } = useBoolean();

  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  useEffect(() => {
    const date = new Date();
    console.log(date);

    if (nav !== 0) {
      date.setMonth(new Date().getMonth() + nav);
    }

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });

    setDateDisplay(
      `${date.toLocaleDateString('en-us', { month: 'long' })} ${year}`
    );

    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

    const daysArray = [];
    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const dayString = `${month + 1}/${i - paddingDays}/${year}`;
      if (i > paddingDays) {
        daysArray.push({
          value: i - paddingDays,
          isCurrentDay: i - paddingDays === day && nav === 0,
          date: dayString,
        });
      } else {
        daysArray.push({
          value: 'padding',
          isCurrentDay: false,
          date: '',
        });
      }
    }

    setDays(daysArray);
  }, [nav]);

  return (
    <>
      <Header dateDisplay={dateDisplay} />
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
