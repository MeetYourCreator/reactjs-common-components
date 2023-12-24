import React, { useState, useRef, useEffect } from 'react';
import { Card } from '../index';
import './styles.css';

export const HorizontalNav = () => {
  //keep track of whether user is scrolling,
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const ref = useRef<any>(null);

  //create Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('entries', entry);

        setIsIntersecting(entry.isIntersecting);
      },
      {
        // rootMargin: '-300px',
        threshold: 0.5,
      }
    );
    // });
    console.log('isIntersecting', isIntersecting);
    observer.observe(ref.current);
    // return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current
        .querySelectorAll('.entry')
        .forEach((el: any) => el.classList.add('slide-in'));
    } else {
      ref.current.querySelectorAll('article .entry').forEach((el: any) => {
        el.classList.remove('slide-in');
        // el.classList.add('slide-out');
      });
    }
  }, [isIntersecting]);

  return (
    <article ref={ref} className="horizontalNavContainer">
      <div className="entry">
        <Card styles={{ border: '1px solid black' }} />
      </div>

      <div className="entry">This is the last entry</div>
    </article>
  );
};
