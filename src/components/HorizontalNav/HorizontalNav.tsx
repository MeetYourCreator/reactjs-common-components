import React, { useState, useCallback, useEffect } from 'react';
import './styles.css';

export const HorizontalNav = () => {
  const changeBkgrd = useCallback(() => console.log(window.scrollY), []);
  useEffect(() => {
    window.addEventListener('scroll', changeBkgrd);
  }, [changeBkgrd]);
  return <div className="horizontalNavContainer">HorizontalNav</div>;
};
