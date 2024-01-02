import { useState, useRef, useId, useEffect } from 'react';

export const useOnWheel = () => {
  const [scrollYPosition, setScrollYPosition] = useState<undefined | number>(
    undefined
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
};
