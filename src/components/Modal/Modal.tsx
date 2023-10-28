import React from 'react';
import { ModalPresentationalProps } from './types';
import './styles.css';

export const Modal: React.FunctionComponent<ModalPresentationalProps> = ({
  setIsModalOpen,
}) => {
  return (
    <div className="modalContainer">
      <h1>Modal</h1>
      <button onClick={setIsModalOpen}>Close</button>
    </div>
  );
};
