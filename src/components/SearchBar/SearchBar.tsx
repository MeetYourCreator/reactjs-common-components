import React, { useState } from 'react';

interface formDataProps {
  searchValue: string;
}

export const SearchBar = () => {
  const [inputField, setInputField] = useState<string>('');
  const [formData, setFormData] = useState<any>({
    searchValue: '',
  });
  console.log('inputField: ', inputField);
  console.log('formData.searchValue: ', formData, formData.searchValue);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormData({ searchValue: inputField });
    setInputField('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="searchBar"
        value={inputField}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputField(e.target.value);
        }}
      />
    </form>
  );
};
