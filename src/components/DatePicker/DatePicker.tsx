import { Calendar } from '../index';
import { useBoolean } from '../../hooks/useBoolean';
import './styles.css';

export const DatePicker = () => {
  const { isValue, setIsVisible, setIsHidden } = useBoolean();
  return (
    <>
      <input onFocus={setIsVisible} onChange={setIsHidden} />
      <div className="dropdownContainer">{isValue && <Calendar />}</div>
    </>
  );
};
