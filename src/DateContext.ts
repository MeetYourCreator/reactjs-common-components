import { createContext, Dispatch, SetStateAction } from 'react';

interface DateContextOutput {
  selectedDate?: string;
  setSelectedDate?: () => void;
}
export const DateContext = createContext({});
