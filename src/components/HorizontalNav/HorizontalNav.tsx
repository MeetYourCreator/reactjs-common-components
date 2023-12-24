import React, { useState, useRef, useEffect } from 'react';
import { Card } from '../index';
import './styles.css';

export const HorizontalNav = () => {
  //keep track of whether user is scrolling,
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const ref = useRef<any>(null);

  //create Intersection Observer
  useEffect(() => {
    const observer =
      // document.addEventListener('DOMContentLoaded', () => {
      new IntersectionObserver(
        ([entry]) => {
          console.log('entries', entry);

          setIsIntersecting(entry.isIntersecting);
        },
        { rootMargin: '-300px' }
      );
    // });
    console.log('isIntersecting', isIntersecting);
    observer.observe(ref.current);
    // return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current
        .querySelectorAll('div')
        .forEach((el: any) => el.classList.add('slide-in'));
    } else {
      ref.current
        .querySelectorAll('div')
        .forEach((el: any) => el.classList.remove('slide-in'));
    }
  }, [isIntersecting]);

  return (
    <article
      ref={ref}

      // className="horizontalNavContainer"
    >
      <div className="entry">
        <Card styles={{ border: '1px solid black' }} />
      </div>
      <div className="entry">
        <Card styles={{ border: '1px solid black' }} />
      </div>

      <div className="entry">This is an entry</div>

      <div className="entry">This is the last entry</div>
    </article>
  );
};
