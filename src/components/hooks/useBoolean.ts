import { useState, useCallback } from 'react';
import { UseBooleanOutput } from '../types';

export const useBoolean = (initialValue?: boolean): UseBooleanOutput => {
  const [isValue, setIsValue] = useState(!!initialValue);

  const setIsTrue = useCallback(() => setIsValue(true), []);
  const setIsFalse = useCallback(() => setIsValue(false), []);
  const setIsVisible = useCallback(() => setIsValue(true), []);
  const setIsHidden = useCallback(() => setIsValue(false), []);
  const toggle = useCallback(() => setIsValue((value) => !value), []);

  return {
    isValue,
    setIsValue,
    setIsTrue,
    setIsFalse,
    setIsVisible,
    setIsHidden,
    toggle,
  };
};
