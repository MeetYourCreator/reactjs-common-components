import React, { useId } from 'react';
import { Image } from '../Image/Image';
import { CardProps } from './types';
import './styles.css';

export const Card = ({
  cardHeader,
  cardImage,
  cardImageAlt,
  cardText,
  children,
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
        <div className="cardChildren"> {children}</div>
      </main>
      <footer className="cardFooter">{cardFooter}</footer>
    </div>
  );
};
