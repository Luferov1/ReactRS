import React, { useState } from 'react';
import styles from './style.module.scss';
import Form from './Form';
import { IPlayer } from '../../constants/playersInfo';
import PlayerCard from '../../components/PlayerCard';

const FormPage = () => {
  const [playersArr, setPlayers] = useState<IPlayer[]>([]);
  return (
    <main className={styles.main}>
      <h2 className={styles.header}>Create new player card</h2>
      <Form setPlayers={setPlayers} players={playersArr} />
      <div className={styles.cardsContainer}>
        {playersArr.map(
          ({ id, img, team, position, selected, name, birthDate, price }) => (
            <PlayerCard
              name={name}
              team={team}
              birthDate={birthDate}
              price={price}
              selected={selected}
              position={position}
              img={img}
              id={id}
              key={id}
            />
          )
        )}
      </div>
    </main>
  );
};

export default FormPage;
