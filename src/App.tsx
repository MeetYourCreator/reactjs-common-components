import React, { useState, useEffect } from 'react';

import { Screen } from './components/';
import { SplitViewPanels } from './components/';
import { VerticalNavDrawer } from './components/';
import { Modal } from './components/';

import { DatePicker } from './components';
import { Toggle } from './components';
import { SearchBar } from './components/';
import { Card } from './components/';
import { Image } from './components';
import { placeholderArray } from './utils';
import { Input } from './components/';

import { Slider } from './components/';

import { InfiniteScroll } from './components/';

import TestIMG from './assets/test/testimg.jpg';
import TestIMG2 from './assets/test/diner.jpg';
import './App.css';

export const App = () => {
  return (
    <>
      <Screen>
        <SplitViewPanels
          leftPanel={<div>Left Panel Content</div>}
          rightPanel={<div>Right Panel Content</div>}
        />
        <VerticalNavDrawer />
        <Modal />
        <DatePicker />
        <Toggle />
        <SearchBar searchBarData={placeholderArray} />
        <Card>
          <Image src={TestIMG2} />
        </Card>
      </Screen>
    </>
  );
};

export default App;
