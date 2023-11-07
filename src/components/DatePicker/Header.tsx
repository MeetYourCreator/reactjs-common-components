import { useState } from 'react';
import { HeaderProps } from './types';
import './styles.css';

export const Header = ({ dateDisplay }: HeaderProps) => {
  return (
    <header className="headerContainer">
      <div>{dateDisplay}</div>
      <div className="buttonContainer">
        <button className="button">Back</button>
        <button className="button">Forward</button>
      </div>
    </header>
  );
};
