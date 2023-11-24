import { Slider } from './Slider';
import { SliderProps } from './types';

export const SliderContainer = ({ urlArray }: SliderProps) => {
  return (
    <div className="sliderContainer">
      <Slider urlArray={urlArray} />
    </div>
  );
};
