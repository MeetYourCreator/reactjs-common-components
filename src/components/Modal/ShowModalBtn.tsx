import { Button } from '../Button/Button';
import { useBoolean } from '../../hooks/useBoolean';
import { Modal } from './Modal';
import './styles.css';

export const ShowModalBtn = () => {
  const { isValue, setIsVisible, setIsFalse } = useBoolean();

  return (
    <>
      <section>
        <Button
          onClick={setIsVisible}
          name="Open Modal"
          styles={{ position: 'absolute', zIndex: 0 }}
        />
      </section>
      {isValue && (
        <Modal
          setIsModalOpen={setIsFalse}
          header="Modal Title"
          main="Supporting Content"
        />
      )}
    </>
  );
};
