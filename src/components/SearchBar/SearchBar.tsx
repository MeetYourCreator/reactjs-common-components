import React, { FormEvent, useState } from 'react';
import { filterSearch, placeholderArray } from './utils';
import { formDataProps } from './types';
import './styles.css';

export const SearchBar = () => {
  const [inputField, setInputField] = useState<string>('');
  const [formData, setFormData] = useState<formDataProps>({
    searchValue: '',
  });

  console.log('inputField: ', inputField);
  console.log('formData.searchValue: ', formData, formData.searchValue);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormData({ searchValue: inputField });
    setInputField('');
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
