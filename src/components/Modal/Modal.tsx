import { Button } from '../Button/Button';
import { ModalProps } from './types';
import './styles.css';

export const Modal: React.FunctionComponent<ModalProps> = ({
  setIsModalOpen,
  header,
  main,
}) => {
  return (
    <div className="modalContainer">
      <header>{header}</header>
      <main>{main}</main>
      <div className="footer">
        <Button onClick={setIsModalOpen} name="Close" />
      </div>
    </div>
  );
};
