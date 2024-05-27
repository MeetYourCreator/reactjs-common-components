import { useState, FormEvent } from 'react';
import { DateContext } from '../../context';
import { Input, Calendar } from '../index';
import { useBoolean } from '../../hooks/useBoolean';
import { ComponentProps } from '../types';
import './styles.css';

export const DatePicker = ({ styles }: ComponentProps) => {
  const [selectedDate, setSelectedDate] = useState<any>('');
  const { isValue, setIsVisible, setIsHidden } = useBoolean();

  return (
    <>
      <DateContext.Provider value={[selectedDate, setSelectedDate]}>
        <div className="datePickerContainer" style={styles}>
          <form
            onSubmit={(e: FormEvent) => {
              e.preventDefault();
              setIsHidden();
              setSelectedDate('');
            }}
          >
            <Input name='selected-date' type='text' onFocus={setIsVisible} value={selectedDate} />
            <button type='submit'>Submit</button>
          </form>
          <div className="dropdownContainer">{isValue && <Calendar />}</div>
        </div>
      </DateContext.Provider>
    </>
  );
};
