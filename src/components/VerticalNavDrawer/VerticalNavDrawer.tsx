import { useObserve } from '../../hooks/useObserve';
import { Card } from '../index';
import './styles.css';

export const VerticalNavDrawer = () => {
  const ref = useObserve('show', '.element', '0px', 0.5);

  return (
    <article
      ref={ref}
      className="vertical-nav-container"
      onWheel={(e) => console.log(e.deltaY)}
    >
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
      <div className="element">
        <Card
          styles={{
            border: '10px solid yellow',
            color: 'white',
            width: '15rem',
          }}
          cardText={'Card 1'}
        />
      </div>
      <div className="element">
        <Card
          styles={{ border: '10px solid blue', color: 'white', width: '15rem' }}
          cardText={'Card 2'}
        />
      </div>
      <div className="element">
        <Card
          styles={{
            border: '10px solid black',
            color: 'white',
            width: '15rem',
          }}
          cardText={'Card 3'}
        />
      </div>
    </article>
  );
};
