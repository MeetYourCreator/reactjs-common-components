import React from 'react';
import { ButtonProps } from './types';
import './styles.css';

export const Button = ({ onClick, name }: ButtonProps) => {
  return (
    <button className="button" onClick={onClick}>
      {name}
    </button>
  );
};
