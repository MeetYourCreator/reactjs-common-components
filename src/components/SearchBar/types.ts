import { ComponentProps } from '../types';

export interface inputFieldProps extends ComponentProps {
  query: string;
  queries?: Array<string>;
}

export interface formDataProps extends ComponentProps {
  searchValue: string;
}
