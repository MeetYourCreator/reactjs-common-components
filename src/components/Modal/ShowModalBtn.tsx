import React from 'react';
import { useBoolean } from '../useBoolean';
import { Modal } from './Modal';
import { ShowModalBtnProps } from './types';
import './styles.css';

export const ShowModalBtn: React.FunctionComponent<ShowModalBtnProps> = ({
  btnName,
}) => {
  const { isValue, setIsVisible, setIsFalse } = useBoolean();

  return (
    <div className="screenContainer">
      <section className="showModalBtnContainer">
        <button className="showModalBtn" onClick={setIsVisible}>
          {btnName}
        </button>
      </section>
      {isValue && <Modal setIsModalOpen={setIsFalse} />}
    </div>
  );
};
