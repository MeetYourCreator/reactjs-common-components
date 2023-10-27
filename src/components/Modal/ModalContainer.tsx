import React, { useState } from 'react';
import { ModalPresentational } from './ModalPresentational';

export const ModalContainer: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className='showModalBtn' onClick={() => setIsModalOpen(true)} />
      {isModalOpen && <ModalPresentational onClose={handleCloseModal} />}
    </div>
  );
};
