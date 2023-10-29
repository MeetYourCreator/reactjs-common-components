import React from 'react';

export const SearchBar = () => {
  return (
    <input
      className="searchBar"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => e.target.value}
    />
  );
};
