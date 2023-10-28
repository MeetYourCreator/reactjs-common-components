import React from 'react';
import { useBoolean } from '../useBoolean';
import { Modal } from './Modal';
import { ShowModalBtnProps } from './types';

export const ShowModalBtn: React.FunctionComponent<ShowModalBtnProps> = ({
  btnName,
}) => {
  const { isValue, setIsTrue, setIsFalse } = useBoolean();

  return (
    <div className="screenContainer">
      <button className="showModalBtn" onClick={setIsTrue}>
        {btnName}
      </button>
      {isValue && <Modal setIsModalOpen={setIsFalse} />}
    </div>
  );
};
