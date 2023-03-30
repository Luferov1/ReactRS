import React, { forwardRef } from 'react';
import { ChangeHandler } from 'react-hook-form';
import { InputTypes, Positions } from '../../../../enums';
import styles from './style.module.scss';

interface Props {
  text: Positions;
  name: string;
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
}

const PositionsRadio = forwardRef<HTMLInputElement, Props>(
  ({ text, onBlur, name, onChange }, ref) => (
    <label htmlFor={text} className={styles.position}>
      {text}
      <input
        id={text}
        type={InputTypes.Radio}
        ref={ref}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        value={text}
      />
    </label>
  )
);

export default PositionsRadio;
