import React from 'react';
import { SplitViewPanels } from './components/SplitViewPanels/SplitViewPanels';
import { ModalContainer as Modal } from './components/Modal/ModalContainer';
import './App.css';

export const App = () => {
  return (
    <>
      <section style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <SplitViewPanels
          leftPanel={<div>Left Panel Content</div>}
          rightPanel={<div>Right Panel Content</div>}
        />
        <Modal />
      </section>
    </>
  );
};

export default App;
