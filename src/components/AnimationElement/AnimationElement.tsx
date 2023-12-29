import React, { useId } from 'react';
import { useObserve } from '../../hooks/useObserve';
import { Card } from '../index';
import { AnimationElementProps } from './types';
import './styles.css';

export const AnimationElement = ({
  toggleSelector,
  targetSelector,
  rootMarginValue,
  thresholdValue,
}: AnimationElementProps) => {
  const ref = useObserve(
    toggleSelector,
    targetSelector,
    rootMarginValue,
    thresholdValue
  );
  const elementId = useId();
  return (
    <article ref={ref}>
      <div id={elementId} className="element">
        <Card>R</Card>
      </div>
    </article>
  );
};
