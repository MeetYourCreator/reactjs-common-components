import React from 'react';
import { ButtonProps } from './types';
import './styles.css';

export const Button = ({ onClick, name, styles }: ButtonProps) => {
  return (
    <button className="button" onClick={onClick} style={styles}>
      {name}
    </button>
  );
};
