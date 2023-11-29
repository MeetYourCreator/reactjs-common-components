import { useState } from 'react';
import { Button } from '../index';
import LeftArrow from './assets/left-arrow.png';
import RightArrow from './assets/right-arrow.png';
import { SliderProps } from './types';
import './styles.css';

import { detectTrackPad } from '../../utils';
export const Slider = ({ urlArray }: SliderProps) => {
  const [urlIndex, setUrlIndex] = useState(0);
  const [hover, setHover] = useState<undefined | string>();
  const onHover = (e: any) => {
    e.stopPropagation();
    setHover((e.target.style.background = 'rgb(0,0,0,.2)'));
    setHover(
      (e.target.style.transition = 'background-color 200ms ease-in-out')
    );
  };

  const onHoverLeave = (e: any) => {
    e.stopPropagation();
    setHover((e.target.style.background = 'transparent'));
    setHover(
      (e.target.style.transition = 'background-color 200ms ease-in-out')
    );
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
          onMouseEnter={onHover}
          onMouseLeave={onHoverLeave}
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
          onMouseEnter={onHover}
          onMouseLeave={onHoverLeave}
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
