import { ChangeEvent, FormEvent, useState } from 'react';
import { placeholderArray } from './utils';
import { inputFieldProps, formDataProps } from './types';
import './styles.css';

export const SearchBar = () => {
  //Bundling the state values like this, instead of creating one for each value, cuts the number of renders, improving performance.
  const [inputField, setInputField] = useState<inputFieldProps>({
    query: '',
    queries: [],
  });
  const [formData, setFormData] = useState<formDataProps>({
    searchValue: inputField.query,
  });

  console.log('inputField: ', inputField);
  console.log('formData.searchValue: ', formData, formData.searchValue);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormData({ searchValue: inputField.query });
    setInputField({ query: '' });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const entries = placeholderArray.filter((item: any) => {
      if (e.target.value === '') {
        return placeholderArray;
      } else {
        return item.toLowerCase().includes(e.target.value);
      }
    });
    setInputField({ query: e.target.value, queries: entries });
  };

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <label htmlFor={inputField.query}></label>
      <input
        type="select"
        className="searchBar"
        value={inputField.query}
        onChange={handleChange}
      />
      {inputField.query === '' ? (
        inputField.query
      ) : (
        <div className="dropdown">
          {inputField.queries?.map((query) => {
            return (
              <ul>
                <li className='dropdownOption' onClick={() => setInputField({ query: query })}>{query}</li>
              </ul>
            );
          })}
        </div>
      )}
    </form>
  );
};
