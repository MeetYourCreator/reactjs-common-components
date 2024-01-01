import React, { useId, useState, useEffect } from 'react';
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
  const ref = useObserve(
    toggleSelector,
    targetSelector,
    rootMarginValue,
    thresholdValue
  );
  const elementId = useId();
  return (
    <article ref={ref} onWheel={(e) => console.log(e.deltaY)}>
      <div id={elementId} className="element">
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
