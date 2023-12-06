import React, { useId } from 'react';
import { Image } from '../Image/Image';
import { CardProps } from './types';
import './styles.css';

export const Card = ({
  cardHeader,
  cardImage,
  cardImageAlt,
  cardText,
  cardFooter,
  styles,
}: CardProps) => {
  const cardId = useId();
  return (
    <div className="cardContainer" style={styles} id={cardId}>
      <header>{cardHeader}</header>
      <main className="cardContent">
        <div className="cardImage">
          {cardImage ? <Image src={cardImage} alt={cardImageAlt} /> : null}
        </div>
        <div className="cardText">{cardText}</div>
      </main>
      <footer className="cardFooter">{cardFooter}</footer>
    </div>
  );
};
