import React, { FormEvent, useState } from 'react';
import { formDataProps } from './types';
import './styles.css';

export const SearchBar = () => {
  const [inputField, setInputField] = useState<string>('');
  const [formData, setFormData] = useState<formDataProps>({
    searchValue: '',
  });

  const placeholderArray: Array<string> = ['cat', 'dog', 'hello'];
  console.log('inputField: ', inputField);
  console.log('formData.searchValue: ', formData, formData.searchValue);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormData({ searchValue: inputField });
    setInputField('');
  };

  const filterSearch = (text: string, values: Array<string>) => {
    console.log(
      'values.includes(text.toLowerCase())',
      values.includes(text.toLowerCase())
    );
    return values.includes(text.toLowerCase());
  };

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <input
        className="searchBar"
        value={inputField}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputField(e.target.value);
          filterSearch(e.target.value, placeholderArray);
        }}
      />
    </form>
  );
};
