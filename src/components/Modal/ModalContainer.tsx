import React from 'react';
import { useBoolean } from '../useBoolean';
import { ModalPresentational } from './ModalPresentational';

export const ModalContainer: React.FunctionComponent = () => {
  const { isValue, setIsTrue, setIsFalse } = useBoolean();

  return (
    <div>
      <button className="showModalBtn" onClick={setIsTrue} />
      {isValue && <ModalPresentational setIsModalOpen={setIsFalse} />}
    </div>
  );
};
