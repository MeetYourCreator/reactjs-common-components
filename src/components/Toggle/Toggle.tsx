import { useBoolean } from '../../hooks/useBoolean';
import './styles.css';

export const Toggle = () => {
  // const { toggle } = useBoolean();
  return (
    <>
      <input type="checkbox" id="check" className="toggle" />
      <label
        htmlFor="check"
        // onClick={toggle}
      />
    </>
  );
};
