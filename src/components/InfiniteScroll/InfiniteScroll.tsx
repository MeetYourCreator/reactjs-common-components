import React from 'react';
import { SearchBar } from '../index';
import { useAxios } from '../../hooks/useAxios';
import { UseAxiosResponse } from '../../hooks/types';
export const InfiniteScroll = () => {
  const response: UseAxiosResponse = useAxios({
    method: 'GET',
    url: 'https://api.publicapis.org/entries',
  });

  // console.log(response.data.entries);

  console.log(response);
  return (
    <div>
      InfiniteScroll
      <SearchBar searchData={[]} />
    </div>
  );
};
