import React from 'react';
import { SplitViewPanels } from './components/SplitViewPanels';
import './App.css';

export const App = () => {
  return (
    <>
      <SplitViewPanels leftPanel={<div>Left</div>} rightPanel={<div>Right</div>} />
    </>
  );
};

export default App;
