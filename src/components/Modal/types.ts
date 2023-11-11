import { ComponentProps } from '../types';

export interface ModalPresentationalProps extends ComponentProps {
  setIsModalOpen: any;
}

export interface ShowModalBtnProps extends ComponentProps {
  btnName?: string;
}
