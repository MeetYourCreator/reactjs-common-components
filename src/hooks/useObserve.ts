import { useRef, useEffect } from 'react';
import { useObserveInput } from './types';

export const useObserve = (
  toggleSelector: string,
  targetSelector: string,
  rootMarginValue: string,
  thresholdValue: number
) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    //create Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        //console.log('entry', entry);
        entry.target.classList.toggle(toggleSelector, entry.isIntersecting);
      },
      {
        //location of the intersection showElementObserver on screen
        rootMargin: rootMarginValue,
        //how much of the element has to be touching the intersection point from none to all (0-1)
        threshold: thresholdValue,
      }
    );

    const elements = ref.current.querySelectorAll(targetSelector);
    elements.forEach((element: any) => {
      observer.observe(element);
    });
    elements.forEach((element: any) =>
      element.classList.toggle(toggleSelector)
    );
  }, [toggleSelector, targetSelector, rootMarginValue, thresholdValue]);

  return ref;
};
