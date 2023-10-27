export interface ModalPresentationalProps {
  onClose?: () => void;
  isModalOpen?: boolean;
  hasCloseBtn?: boolean;
  children?: React.ReactNode;
  modalRef?: any;
  setIsModalOpen: (isModalOpen: boolean) => void;
}
