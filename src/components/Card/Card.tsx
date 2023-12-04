import React, { useState } from 'react';
import { CardProps } from './types';
import './styles.css';

export const Card = ({
  cardHeader,
  cardImage,
  cardText,
  cardFooter,
}: CardProps) => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  return (
    <div className="cardContainer">
      <header>{cardHeader}</header>
      <main className="cardContent">
        <div className="cardImage">{cardImage}</div>
        <div className="cardText">{cardText}</div>
      </main>
      <footer className="cardFooter">{cardFooter}</footer>
    </div>
  );
};
