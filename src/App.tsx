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
        <div className="screenContainer">
          <SplitViewPanels
            leftPanel={<div>Left Panel Content</div>}
            rightPanel={<div>Right Panel Content</div>}
          />
        </div>
        <div className="screenContainer">
          <Modal btnName="Submit" />
        </div>
        <div className="screenContainer">
          <SearchBar />
        </div>
        <div className="screenContainer">
          <DatePicker />
        </div>
        <div className="screenContainer">
          <List />
        </div>
      </section>
    </>
  );
};

export default App;
