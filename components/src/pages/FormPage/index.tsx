import React from 'react';
import styles from './style.module.scss';
import Form from './Form';
import PlayerCard from '../../components/PlayerCard';
import { useAppSelector } from '../../hooks';
import { generateUniqueId } from '../../functions';

const FormPage = () => {
  const { newCards } = useAppSelector((state) => state.formPageReducer);
  return (
    <main className={styles.main}>
      <h2 className={styles.header}>Create new player card</h2>
      <Form />
      <div className={styles.cardsContainer}>
        {newCards.map(
          ({ img, team, position, selected, name, birthDate, price }) => (
            <PlayerCard
              name={name}
              team={team}
              birthDate={birthDate}
              price={price}
              selected={selected}
              position={position}
              img={img}
              key={generateUniqueId(name)}
            />
          )
        )}
      </div>
    </main>
  );
};

export default FormPage;
