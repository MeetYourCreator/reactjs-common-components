import { ComponentProps } from '../types';

export interface SearchBarData {
  searchBarData: Array<string>;
}
export interface InputField extends ComponentProps {
  query: string;
  queries?: Array<string>;
}

export interface FormDataOutput extends ComponentProps {
  searchValue: string;
}
