import React from 'react';
import { SplitViewPanels } from './components/';
import { Modal } from './components/';
import { SearchBar } from './components/';
import { DatePicker } from './components';
import { List } from './components/';
import './App.css';

export const App = () => {
  return (
    <>
      <section className="appContainer">
        <SplitViewPanels
          leftPanel={<div>Left Panel Content</div>}
          rightPanel={<div>Right Panel Content</div>}
        />
        <Modal btnName={'Submit'} />
        <SearchBar />
        <DatePicker />
        <List />
      </section>
    </>
  );
};

export default App;
