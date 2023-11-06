import { useState, useEffect } from 'react';
import { DatePickerProps } from './types';
import './styles.css';

export const datePlaceholderArray: Array<number> = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

export const DatePicker = () => {
  const date = new Date();
  console.log(date);
  return (
    <div className="calendarContainer">
      {datePlaceholderArray.map((date) => {
        return <div className="calendarDate">{date}</div>;
      })}
    </div>
  );
};
