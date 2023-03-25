import React, { forwardRef } from 'react';
import { IValidInput } from '../../../../interfaces';
import styles from './style.module.scss';
import { InputTypes } from '../../../../enums';

const ValidInput = forwardRef<HTMLInputElement, IValidInput>(
  ({ text, type }, ref) => (
    <label className={styles.label} htmlFor={text}>
      {text}
      <input
        className={styles.input}
        id={text}
        type={type}
        ref={ref}
        accept={type === InputTypes.File ? 'image/*' : undefined}
      />
    </label>
  )
);

export default ValidInput;
