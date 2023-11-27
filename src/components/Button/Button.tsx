import { useId } from 'react';
import { ButtonProps } from './types';
import './styles.css';

export const Button = ({
  name,
  icon,
  onClick,
  onMouseEnter,
  onMouseLeave,
  styles,
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
