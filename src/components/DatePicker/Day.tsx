import React from 'react';
import { DayProps } from './types';
export const Day = ({ date }: DayProps) => {
  return date.value === 'padding' ? (
    <div></div>
  ) : (
    <div className="calendarDay">{date.value}</div>
  );
};
