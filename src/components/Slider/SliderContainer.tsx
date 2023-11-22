import { Slider } from './Slider';
import { SliderProps } from './types';

export const SliderContainer = ({ urlArray }: SliderProps) => {
  return (
    <div
      style={{
        maxWidth: '1200px',
        width: '100%',
        height: '100%',
        margin: '0 auto',
      }}
    >
      <Slider urlArray={urlArray} />
    </div>
  );
};
