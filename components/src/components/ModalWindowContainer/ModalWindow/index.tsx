import React, { MouseEventHandler } from 'react';
import { FullPlayerInfo } from '../../../interfaces';
import styles from './style.module.scss';
import HeaderNText from '../../HeaderNText';
import TeamsLogos from '../../../constants/TeamsLogos';

interface Props extends FullPlayerInfo {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const ModalWindow = ({
  handleClick,
  position,
  numberOfGoals,
  team,
  dateOfBirth,
  nationality,
  name,
}: Props) => {
  return (
    <button className={styles.modalWindow} onClick={handleClick} type="button">
      <div className={styles.topPart}>
        <img src={TeamsLogos[team]} alt={name} />
      </div>
      <h3 className={styles.header}>{name}</h3>
      <div className={styles.bottomPart}>
        <HeaderNText header="Team" text={team} />
        <HeaderNText header="Position" text={position} />
        <HeaderNText header="Nationality" text={nationality} />
        <HeaderNText
          header="Birth date"
          text={dateOfBirth.split('-').reverse().join('-')}
        />
        <HeaderNText header="Goals" text={numberOfGoals} />
      </div>
    </button>
  );
};

export default ModalWindow;
