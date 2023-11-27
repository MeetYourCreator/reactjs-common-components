import { useId } from 'react';
import { ButtonProps } from './types';
import './styles.css';

export const Button = ({
  onClick,
  name,
  icon,
  styles,
  onMouseEnter,
  onMouseLeave,
}: ButtonProps) => {
  const buttonId = useId();

  return (
    <button
      id={buttonId}
      className="button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={styles}
    >
      {name}
      {icon}
    </button>
  );
};
