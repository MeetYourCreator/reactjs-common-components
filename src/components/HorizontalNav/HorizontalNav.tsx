import React, { useState, useRef, useEffect, RefObject } from 'react';
import { Card } from '../index';
import './styles.css';

export const HorizontalNav = () => {
  const ref = useRef<any>(null);

  useEffect(() => {
    //create Intersection Observer
    const showElementObserver = new IntersectionObserver(
      ([entry]) => {
        //console.log('entry', entry);
        entry.target.classList.toggle('show', entry.isIntersecting);
      },
      {
        //location of the intersection showElementObserver on screen
        rootMargin: '0px',
        //how much of the element has to be touching the intersection point from none to all (0-1)
        threshold: 1,
      }
    );

    const elements = ref.current.querySelectorAll('.element');
    elements.forEach((element: any) => {
      showElementObserver.observe(element);
    });
    elements.forEach((el: any) => el.classList.toggle('show'));
  }, []);

  return (
    <article
      ref={ref}
      className="element-container"
      onWheel={(e) => console.log(e.deltaY)}
    >
      <div className="element">
        <Card
          styles={{ border: '10px solid green', color: 'white' }}
          cardText={'Card 0'}
        />
      </div>
      <div className="element">
        <Card
          styles={{ border: '10px solid yellow', color: 'white' }}
          cardText={'Card 1'}
        />
      </div>
      <div className="element">
        <Card
          styles={{ border: '10px solid blue', color: 'white' }}
          cardText={'Card 2'}
        />
      </div>
      <div className="element">
        <Card
          styles={{ border: '10px solid black', color: 'white' }}
          cardText={'Card 3'}
        />
      </div>
      <div className="element">Card 4</div>
    </article>
  );
};
