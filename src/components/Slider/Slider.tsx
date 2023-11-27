import { useState } from 'react';
import { Button } from '../index';
import LeftArrow from './assets/left-arrow.png';
import RightArrow from './assets/right-arrow.png';
import { SliderProps } from './types';
import './styles.css';

export const Slider = ({ urlArray }: SliderProps) => {
  const [urlIndex, setUrlIndex] = useState(0);
  const [hover, setHover] = useState<undefined | string>();
  const onHover = (e: any) => {
    setHover((e.target.style.background = 'black'));
  };
  return (
    <>
      <div className="sliderContainer">
        <div className="slider">{urlArray[urlIndex]}</div>
        {/* <div className="buttonContainer"> */}
        <Button
          icon={<img src={LeftArrow} className="btnImg" alt="Previous" />}
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
          onMouseEnter={onHover}
        />
        <Button
          icon={<img src={RightArrow} className="btnImg" alt="Next" />}
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
