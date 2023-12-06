import React from 'react';
import { ImageProps } from './types';

export const Image = ({ src, alt }: ImageProps) => {
  return (
    <>
      <img src={src} alt={alt} />
    </>
  );
};
