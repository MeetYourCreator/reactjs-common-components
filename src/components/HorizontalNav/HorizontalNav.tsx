import React, { useState, useRef, useEffect, RefObject } from 'react';
import { Card } from '../index';
import './styles.css';

export const HorizontalNav = () => {
  const ref = useRef<any>(null);

  useEffect(() => {
    //create Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('entries', entry);

        entry.target.classList.toggle('show', entry.isIntersecting);
      },
      {
        // rootMargin: '-300px',
        threshold: 0.5,
      }
    );
    const cards = ref.current.querySelectorAll('.card');
    cards.forEach((card: any) => {
      observer.observe(card);
    });
    cards.forEach((el: any) => el.classList.toggle('show'));
    // return () => observer.disconnect();
  }, []);

  return (
    <article ref={ref} className="card-container">
      <div className="card">
        <Card
          styles={{ border: '10px solid green', color: 'white' }}
          cardText={'Card 0'}
        />
      </div>
      <div className="card">
        <Card
          styles={{ border: '10px solid yellow', color: 'white' }}
          cardText={'Card 1'}
        />
      </div>
      <div className="card">
        <Card
          styles={{ border: '10px solid blue', color: 'white' }}
          cardText={'Card 2'}
        />
      </div>
      <div className="card">
        <Card
          styles={{ border: '10px solid black', color: 'white' }}
          cardText={'Card 3'}
        />
      </div>
      <div className="card">Card 4</div>
    </article>
  );
};
