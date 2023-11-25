import { Button } from '../index';
import { HeaderProps } from './types';
import './styles.css';

export const Header = ({ dateDisplay, onBack, onNext }: HeaderProps) => {
  return (
    <header className="headerContainer">
      <div>{dateDisplay}</div>
      <div className="buttonContainer">
        <Button name="back" onClick={onBack} />
        <Button name="forward" onClick={onNext} />
      </div>
    </header>
  );
};
