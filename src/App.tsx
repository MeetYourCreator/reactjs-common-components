import React from 'react';
import { SplitViewPanels } from './components/SplitViewPanels/SplitViewPanels';
import './App.css';

export const App = () => {
  return (
    <>
      <SplitViewPanels
        leftPanel={<div>Left Panel Content</div>}
        rightPanel={<div>Right Panel Content</div>}
      />
    </>
  );
};

export default App;
