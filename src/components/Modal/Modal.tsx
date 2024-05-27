import { Card } from '../index';
import { Button } from '../index';
import { ModalProps } from './types';
import './styles.css';

export const Modal: React.FunctionComponent<ModalProps> = ({
  setIsModalOpen,
  modalHeader,
  modalImage,
  modalText,
  styles,
}) => {
  return (
    <section
      role='alertdialog'
      aria-labelledby='modal'
      aria-describedby='dialogDesc'
      className="modalContainer"
      style={styles}
    >
      <Card
        cardHeader={modalHeader}
        cardImage={modalImage}
        cardText={modalText}
        cardFooter={<Button onClick={setIsModalOpen} name="Close" />}
      />
    </section>
  );
};
