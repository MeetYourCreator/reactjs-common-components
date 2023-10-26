import React from 'react';
import { ModalPresentationalProps } from './types';

export const ModalPresentational: React.FunctionComponent<
  ModalPresentationalProps
> = ({ hasCloseBtn, onClose, children, modalRef }) => {
  return (
    <dialog ref={modalRef}>
      <button onClick={onClose}>Close</button>
      {children}
    </dialog>
  );
};
