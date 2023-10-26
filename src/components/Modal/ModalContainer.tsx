import React, { useState, useRef, useEffect } from 'react';
import { ModalPresentational } from './ModalPresentational';

export const ModalContainer: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const modalRef = useRef<HTMLDialogElement | null>(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setIsModalOpen(true);
  }, [isModalOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  });

  return (
    <div>
      <ModalPresentational modalRef={modalRef} onClose={handleCloseModal} />
    </div>
  );
};
