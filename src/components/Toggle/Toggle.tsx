import { useId } from 'react';
import { useBoolean } from '../../hooks/useBoolean';
import { ComponentProps } from '../types';
import './styles.css';

export const Toggle = ({ styles }: ComponentProps) => {
  // const { toggle } = useBoolean();
  const toggleId = useId();
  return (
    <>
      <input type="checkbox" id={toggleId} className="toggle" style={styles} />
      <label
        htmlFor={toggleId}
        // onClick={toggle}
      />
    </>
  );
};
