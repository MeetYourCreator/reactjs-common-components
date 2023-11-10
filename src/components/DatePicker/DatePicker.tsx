import { useState, FormEvent } from 'react';
import { DateContext } from '../../DateContext';
import { Calendar } from '../index';
import { useBoolean } from '../../hooks/useBoolean';
import './styles.css';

export const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<any>('');
  const { isValue, setIsVisible, setIsHidden } = useBoolean();

  return (
    <>
      <DateContext.Provider value={[selectedDate, setSelectedDate]}>
        <form
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            setIsHidden();
            setSelectedDate('');
          }}
        >
          <input onFocus={setIsVisible} value={selectedDate} />
        </form>
        <div className="dropdownContainer">{isValue && <Calendar />}</div>
      </DateContext.Provider>
    </>
  );
};
