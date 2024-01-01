import React, { useId, useRef, useState, useEffect } from 'react';
import { useObserve } from '../../hooks/useObserve';
import { Card } from '../index';
import { UseObserveInput } from '../../hooks/types';
import './styles.css';

export const AnimationElement = ({
  toggleSelector,
  targetSelector,
  rootMarginValue,
  thresholdValue,
}: UseObserveInput) => {
  const [scrollYPosition, setScrollYPosition] = useState<undefined | number>(
    undefined
  );
  const ref = useObserve(
    toggleSelector,
    targetSelector,
    rootMarginValue,
    thresholdValue
  );
  const childRef = useRef<HTMLDivElement>(null);

  const elementId = useId();

  const onWheel = (e: any) => {
    setScrollYPosition(e.deltaY);
    console.log('scrollYPosition', scrollYPosition);

    const child = childRef.current;
    console.log('child', child);
    if (child && scrollYPosition) {
      const moveDistance = scrollYPosition * 2;

      child.style.color = 'red';
      child.style.transform = `translateY(${moveDistance}px)`;
      child.style.transform = `translateX(-${scrollYPosition}px)`;
    }
  };
  useEffect(() => {
    document.addEventListener('onwheel', onWheel);
    return () => {
      document.removeEventListener('onwheel', onWheel);
    };
  });
  return (
    <article ref={ref} onWheel={onWheel}>
      <div id={elementId} className="element" ref={childRef}>
        <Card>R</Card>
      </div>
      <div className="element">
        <Card
          styles={{
            border: '10px solid green',
            color: 'white',
            width: '15rem',
          }}
          cardText={'Card 0'}
        />
      </div>
    </article>
  );
};
