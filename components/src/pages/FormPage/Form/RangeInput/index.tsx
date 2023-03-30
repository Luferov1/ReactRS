import React, { forwardRef } from 'react';
import { IRangeInput } from '../../../../interfaces';
import styles from './style.module.scss';
import { InputTypes } from '../../../../enums';

const RangeInput = forwardRef<HTMLInputElement, IRangeInput>(
  ({ id, max, min, step, name, onBlur, onChange }, ref) => (
    <label htmlFor={id} className={styles.rangeContainer}>
      <span className={styles.rangeHeader}>{`Select ${id}`}</span>
      <span className={styles.limit}>{min}</span>
      <input
        min={min}
        max={max}
        step={step}
        id={id}
        type={InputTypes.Range}
        ref={ref}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      />
      <span className={styles.limit}>{max}</span>
    </label>
  )
);

export default RangeInput;
