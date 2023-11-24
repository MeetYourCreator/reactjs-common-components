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
        <div className="buttonContainer">
          <Button
            name="Show Previous"
            onClick={() =>
              setUrlIndex((index) => {
                if (index === 0) {
                  return urlArray.length - 1;
                } else {
                  return urlIndex - 1;
                }
              })
            }
          />
          <Button
            name="Show Next"
            onClick={() => {
              setUrlIndex((index) => {
                if (index === urlArray.length - 1) {
                  return 0;
                } else {
                  return urlIndex + 1;
                }
              });
            }}
          />
        </div>
      </div>
    </>
  );
};
