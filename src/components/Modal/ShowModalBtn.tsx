import React from 'react';
import { useBoolean } from '../../hooks/useBoolean';
import { Modal } from './Modal';
import { ShowModalBtnProps } from './types';
import './styles.css';

export const ShowModalBtn: React.FunctionComponent<ShowModalBtnProps> = ({
  btnName,
}) => {
  const { isValue, setIsVisible, setIsFalse } = useBoolean();

  return (
    <>
      <section>
        <button className="showModalBtn" onClick={setIsVisible}>
          {btnName}
        </button>
      </section>
      {isValue && (
        <Modal setIsModalOpen={setIsFalse} header="" main="Main Content" />
      )}
    </>
  );
};
