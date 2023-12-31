import { useObserve } from '../../hooks/useObserve';
import { Card } from '../index';
import { UseObserveInput } from '../../hooks/types';
import './styles.css';

export const VerticalNavDrawer = ({
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
      className="vertical-nav-container"
      onWheel={(e) => console.log(e.deltaY)}
    >
      <div className="card">
        <Card
          styles={{
            border: '10px solid green',
            color: 'white',
            width: '15rem',
          }}
          cardText={'Card 0'}
        />
      </div>
      <div className="card">
        <Card
          styles={{
            border: '10px solid yellow',
            color: 'white',
            width: '15rem',
          }}
          cardText={'Card 1'}
        />
      </div>
      <div className="card">
        <Card
          styles={{ border: '10px solid blue', color: 'white', width: '15rem' }}
          cardText={'Card 2'}
        />
      </div>
      <div className="card">
        <Card
          styles={{
            border: '10px solid purple',
            color: 'white',
            width: '15rem',
          }}
          cardText={'Card 3'}
        />
      </div>
    </article>
  );
};
