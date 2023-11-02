import React, { FormEvent, useState } from 'react';
import { filterSearch, placeholderArray } from './utils';
import { inputFieldProps, formDataProps } from './types';
import './styles.css';

export const SearchBar = () => {
  const [inputField, setInputField] = useState<inputFieldProps>({
    query: '',
    list: [],
  });
  const [formData, setFormData] = useState<formDataProps>({
    searchValue: '',
  });

  console.log('inputField: ', inputField);
  console.log('formData.searchValue: ', formData, formData.searchValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputField({ query: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormData({ searchValue: inputField.query });
    setInputField({ query: '' });
  };

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <input
        className="searchBar"
        value={inputField.query}
        onChange={handleChange}
      />
    </form>
  );
};
