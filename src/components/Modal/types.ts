export interface ModalPresentationalProps {
  isModalOpen?: boolean;
  hasCloseBtn?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  modalRef?: any;
}
