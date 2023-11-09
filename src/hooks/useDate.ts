import { useEffect, useState } from 'react';

export const useDate = (nav: number) => {
  const [days, setDays] = useState<Array<any>>([]);
  const [dateDisplay, setDateDisplay] = useState<string>('');

  useEffect(() => {
    const date = new Date();

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

    const weekdays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

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

  return {
    days,
    dateDisplay,
  };
};
