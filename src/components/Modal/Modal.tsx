import React from 'react';
import { ModalPresentationalProps } from './types';
import './styles.css';

export const Modal: React.FunctionComponent<ModalPresentationalProps> = ({
  setIsModalOpen,
}) => {
  return (
    <div className="modalContainer">
      <header className="modalHeader">
        <h2 className="modaleHeaderTitle">Title</h2>
      </header>
      <main>Modal Content</main>
      <footer className="modalFooter"></footer>
      <button onClick={setIsModalOpen}>Close</button>
    </div>
  );
};
