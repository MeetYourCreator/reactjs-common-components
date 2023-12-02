import React, { useState } from 'react';
import { SearchBar } from '../index';
import { dummyData2 } from '../../utils';
import { InfiniteScrollProps } from './types';

export const InfiniteScroll = () => {
  const [query, setQuery] = useState<string>('');
  
  return (
    <div>
      <SearchBar searchBarData={dummyData2} />
    </div>
  );
};
