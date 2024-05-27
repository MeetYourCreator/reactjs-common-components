import { useId } from 'react';
import { InputProps } from './types';
import './styles.css';

export const Input = ({
  type,
  labelId,
  name,
  value,
  onChange,
  onFocus,
  defaultValue,
  checked,
  defaultChecked,
  autoComplete,
  autoFocus,
  disabled,
  placeholder,
  readOnly,
  required,
  styles,
}: InputProps) => {
  labelId = useId();

  console.log(labelId);
  return (
    <>
      <label htmlFor={labelId}>{name}</label>
      <input
        id={labelId}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        defaultValue={defaultValue}
        checked={checked}
        defaultChecked={defaultChecked}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        disabled={disabled}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        style={styles}
      />
    </>
  );
};
