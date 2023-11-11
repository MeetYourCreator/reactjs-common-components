import { Button } from '../Button/Button';
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
        <Button
          onClick={setIsVisible}
          name={btnName}
          styles={{ position: 'absolute', zIndex: 0 }}
        />
      </section>
      {isValue && (
        <Modal setIsModalOpen={setIsFalse} header="" main="Main Content" />
      )}
    </>
  );
};
