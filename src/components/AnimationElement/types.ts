import { ComponentProps } from '../types';

export interface AnimationElementProps extends ComponentProps {
  toggleSelector: string;
  targetSelector: string;
  rootMarginValue?: string;
  thresholdValue?: number;
}
