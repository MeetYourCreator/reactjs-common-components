import React from 'react';
import { CardProps } from './types';
import './styles.css';

export const Card = ({
  cardHeader,
  cardImage,
  cardText,
  cardFooter,
  styles,
}: CardProps) => {
  return (
    <div className="cardContainer" style={styles}>
      <header>{cardHeader}</header>
      <main className="cardContent">
        <div className="cardImage">{cardImage}</div>
        <div className="cardText">{cardText}</div>
      </main>
      <footer className="cardFooter">{cardFooter}</footer>
    </div>
  );
};
