import { Button } from '../index';
import { HeaderProps } from './types';
import './styles.css';

export const Header = ({
  dateDisplay,
  onBack,
  onNext,
  styles,
}: HeaderProps) => {
  return (
    <header className="headerContainer" style={styles}>
      <div>{dateDisplay}</div>
      <div className="buttonContainer">
        <Button name="back" onClick={onBack} />
        <Button name="forward" onClick={onNext} />
      </div>
    </header>
  );
};
