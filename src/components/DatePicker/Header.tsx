import { useState } from 'react';
import { Button } from '../index';
import { HeaderProps } from './types';
import './styles.css';

export const Header = ({ dateDisplay }: HeaderProps) => {
  return (
    <header className="headerContainer">
      <div>{dateDisplay}</div>
      <div className="buttonContainer">
        <Button name="forward" />
        <Button name="back" />
      </div>
    </header>
  );
};
