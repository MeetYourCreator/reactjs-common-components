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
  const ref = useObserve(
    toggleSelector,
    targetSelector,
    rootMarginValue,
    thresholdValue
  );

  return (
    <article
      ref={ref}
      // onWheel={onWheel}
    >
      <div className="element">
        <Card>R</Card>
      </div>
    </article>
  );
};
