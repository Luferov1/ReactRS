import React, { useEffect, useRef, useState } from 'react';
import SearchBar from '../../components/SearchBar';
import styles from './style.module.scss';
import PlayerCard from '../../components/PlayerCard';
import players from '../../constants/playersInfo';
import { fillArray, filterPlayersArr } from '../../functions';

const MainPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredPlayers, setFilteredPlayers] = useState(
    fillArray(1, players.length)
  );
  const searchValueRef = useRef(searchValue);
  useEffect(() => {
    searchValueRef.current = searchValue;
  }, [searchValue]);
  useEffect(() => {
    const value = localStorage.getItem('value');
    if (value) {
      setSearchValue(value);
      setFilteredPlayers(filterPlayersArr(value));
    }
    return () => {
      localStorage.setItem('value', searchValueRef.current);
    };
  }, []);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.target.value;
    setSearchValue(targetValue);
    setFilteredPlayers(filterPlayersArr(targetValue));
  };
  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Best FPL assets</h1>
      <h2 className={styles.subHeader}>
        This is the best FPL assets for the upcoming GWs
      </h2>
      <SearchBar value={searchValue} onChange={handleChange} />
      <div className={styles.playersContainer} role="article">
        {players
          .filter(({ id }) => {
            return filteredPlayers.includes(id);
          })
          .map(
            ({ name, price, birthDate, img, team, position, selected, id }) => (
              <PlayerCard
                name={name}
                team={team}
                birthDate={birthDate}
                price={price}
                selected={selected}
                position={position}
                img={img}
                id={id}
                key={`Player${id}`}
              />
            )
          )}
      </div>
    </main>
  );
};

export default MainPage;
