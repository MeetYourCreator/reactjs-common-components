import { useBoolean } from '../../hooks/useBoolean';
import './styles.css';

export const Toggle = () => {
  return (
    <>
      <input type="checkbox" id="check" className="toggle" />
      <label htmlFor="check" />
    </>
  );
};
