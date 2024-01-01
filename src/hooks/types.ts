import { Dispatch, SetStateAction } from 'react';
export interface UseBooleanOutput {
  isValue: boolean;
  setIsValue: Dispatch<SetStateAction<boolean>>;
  setIsTrue: () => void;
  setIsFalse: () => void;
  setIsVisible: () => void;
  setIsHidden: () => void;
  toggle: () => void;
}
export interface UseAxiosInput {
  method: string;
  url: string;
  params?: any;
}

export interface UseAxiosResponse {
  data: any;
  config: any;
  headers: any;
  request: any;
  status: number;
}

export interface UseObserveInput {
  toggleSelector: string;
  targetSelector: string;
  rootMarginValue?: string;
  thresholdValue?: number;
}
