import { ComponentProps } from '../types';

export interface ModalProps extends ComponentProps {
  setIsModalOpen: any;
  modalHeader?: any;
  modalImage?: JSX.Element;
  modalText?: string;
  main?: any;
}
