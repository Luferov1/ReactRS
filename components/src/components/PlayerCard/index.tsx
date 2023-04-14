import React from 'react';
import styles from './style.module.scss';
import HeaderNText from '../HeaderNText';
import { IPlayerCard } from '../../interfaces';

const PlayerCard = ({
  team,
  price,
  selected,
  birthDate,
  name,
  position,
  img,
}: IPlayerCard) => (
  <div className={styles.container}>
    <div className={styles.topPart}>
      <img src={img} alt={name} />
    </div>
    <h3 className={styles.header}>{name}</h3>
    <div className={styles.bottomPart}>
      <HeaderNText header="Team" text={team} />
      <HeaderNText header="Position" text={position} />
      <HeaderNText header="Price" text={`${price}m £`} />
      <HeaderNText header="Birth date" text={birthDate} />
      <HeaderNText header="Selected" text={`${selected}%`} />
    </div>
  </div>
);

export default PlayerCard;
