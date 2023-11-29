import { ComponentProps } from '../types';

export interface SearchBarOutput {
  searchData: Array<any>;
}
export interface InputFieldOutput extends ComponentProps {
  query: string;
  queries?: Array<string>;
}

export interface FormDataOutput extends ComponentProps {
  searchValue: string;
}
