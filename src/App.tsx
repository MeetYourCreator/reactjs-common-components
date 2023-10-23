import React from 'react';
import { SplitViewPanels } from './components/SplitViewPanels/SplitViewPanels';
import './App.css';

export const App = () => {
  return (
    <>
      <SplitViewPanels
        leftPanel={
          <div style={{ backgroundColor: 'yellow' }}>
            <div>Left</div>
            <div>Left</div>
            <div>Left</div>
            <div>Left</div>
            <div>Left</div>
            <div>Left</div>
            <div>Left</div>
            <div>Left</div>
          </div>
        }
        rightPanel={
          <div style={{ backgroundColor: 'grey' }}>
            <div>Right Right</div>
            <div>Right</div>
          </div>
        }
      />
    </>
  );
};

export default App;
