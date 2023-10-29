import React from 'react';
import { SplitViewPanels } from './components/SplitViewPanels/SplitViewPanels';
import { ShowModalBtn } from './components/Modal/ShowModalBtn';
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
      </section>
    </>
  );
};

export default App;
