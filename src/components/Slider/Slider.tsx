import { useState } from 'react';
import { Button } from '../index';
import { SliderProps } from './types';
import './styles.css';

export const Slider = ({ urlArray }: SliderProps) => {
  const [urlIndex, setUrlIndex] = useState(0);
  return (
    <>
      <div className="sliderContainer">
        <div className="slider">{urlArray[urlIndex]}</div>
        {/* <div className="buttonContainer"> */}
        <Button
          name="Prev"
          onClick={() =>
            setUrlIndex((index) => {
              if (index === 0) {
                return urlArray.length - 1;
              } else {
                return urlIndex - 1;
              }
            })
          }
          styles={{
            all: 'unset',
            display: 'block',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            padding: '1rem',
            cursor: 'pointer',
          }}
        />
        <Button
          name="Next"
          onClick={() => {
            setUrlIndex((index) => {
              if (index === urlArray.length - 1) {
                return 0;
              } else {
                return urlIndex + 1;
              }
            });
          }}
          styles={{
            all: 'unset',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            padding: '1rem',
            cursor: 'pointer',
          }}
        />
      </div>
      {/* </div> */}
    </>
  );
};
