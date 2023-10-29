import React from 'react';
import { SplitViewPanels } from './components/SplitViewPanels/index';
import { ShowModalBtn } from './components/Modal/index';
import { SearchBar } from './components/SearchBar';
import './App.css';

export const App = () => {
  return (
    <>
      <section className="appContainer">
        <SplitViewPanels
          leftPanel={<div>Left Panel Content</div>}
          rightPanel={<div>Right Panel Content</div>}
        />
        <ShowModalBtn btnName={'Submit'} />
        <SearchBar />
      </section>
    </>
  );
};

export default App;
