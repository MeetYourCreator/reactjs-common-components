import { useRef, useEffect } from 'react';

export const useObserve = (
  toggleSelector: string,
  targetSelector: string,
  rootMarginValue?: string,
  thresholdValue?: number
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.target.classList.toggle(toggleSelector, entry.isIntersecting);
      },
      {
        //location of the intersection showElementObserver on screen
        rootMargin: rootMarginValue,
        //how much of the element has to be touching the intersection point from none to all (0-1)
        threshold: thresholdValue,
      }
    );
    if (ref.current) {
      const elements = ref.current.querySelectorAll(targetSelector);
      elements.forEach((element: any) => {
        observer.observe(element);
      });

      elements.forEach((element: any) =>
        element.classList.toggle(toggleSelector)
      );
    }
  }, [toggleSelector, targetSelector, rootMarginValue, thresholdValue]);

  return ref;
};
