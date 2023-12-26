import React, { useState, useRef, useEffect, RefObject } from 'react';
import { Card } from '../index';
import './styles.css';

export const VerticalNavDrawer = () => {
  const ref = useRef<any>(null);

  useEffect(() => {
    //create Intersection Observer
    const observer = new IntersectionObserver(
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
      observer.observe(element);
    });
    elements.forEach((element: any) => element.classList.toggle('show'));
  }, []);

  return (
    <article
      ref={ref}
      className="vertical-nav-container"
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
    </article>
  );
};
