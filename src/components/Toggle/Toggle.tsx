import { useId } from 'react';
import { useBoolean } from '../../hooks/useBoolean';
import './styles.css';

export const Toggle = () => {
  // const { toggle } = useBoolean();
  const toggleId = useId();
  return (
    <>
      <input type="checkbox" id={toggleId} className="toggle" />
      <label
        htmlFor={toggleId}
        // onClick={toggle}
      />
    </>
  );
};
