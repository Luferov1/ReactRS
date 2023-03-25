import React, { forwardRef } from 'react';
import { InputTypes, Positions } from '../../../../enums';
import styles from './style.module.scss';

interface Props {
  text: Positions;
}

const PositionsRadio = forwardRef<HTMLInputElement, Props>(({ text }, ref) => (
  <label htmlFor={text} className={styles.position}>
    {text}
    <input id={text} type={InputTypes.Radio} ref={ref} name="position" />
  </label>
));

export default PositionsRadio;
