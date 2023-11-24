import { useId } from 'react';
import { ButtonProps } from './types';
import './styles.css';

export const Button = ({ onClick, name, styles }: ButtonProps) => {
  const buttonId = useId();
  return (
    <button id={buttonId} className="button" onClick={onClick} style={styles}>
      {name}
    </button>
  );
};
