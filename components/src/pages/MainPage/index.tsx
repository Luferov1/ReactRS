import React, { useEffect, useRef, useState } from 'react';
import SearchBar from '../../components/SearchBar';
import styles from './style.module.scss';
import { fetchAllPlayers, filterPlayersArr } from '../../functions';
import { ModalInitialState, Scorers } from '../../interfaces';
import SmallPlayerCard from '../../components/SmallPlayerCard';
import LoadingIndicator from '../../components/LoadingIndicator';
import { TeamNames } from '../../enums';
import ModalWindowContainer from '../../components/ModalWindowContainer';

const MainPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredPlayers, setFilteredPlayers] = useState<Scorers[]>([]);
  const searchValueRef = useRef(searchValue);
  const [isServerError, setServerError] = useState(false);
  const [isListLoading, setListLoading] = useState(true);
  const [modalInitState, setModalInitState] =
    useState<ModalInitialState | null>(null);

  useEffect(() => {
    searchValueRef.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    const value = localStorage.getItem('value');
    if (value) {
      setSearchValue(value);
      fetchAllPlayers(setServerError, setListLoading).then((players) => {
        const newPlayers = filterPlayersArr(value, players);
        setFilteredPlayers(newPlayers);
      });
    } else {
      fetchAllPlayers(setServerError, setListLoading).then((players) => {
        setFilteredPlayers(players);
      });
    }
    return () => {
      localStorage.setItem('value', searchValueRef.current);
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.target.value;
    setSearchValue(targetValue);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const allPlayers = await fetchAllPlayers(
      setServerError,
      setListLoading,
      1000
    );
    setFilteredPlayers(filterPlayersArr(searchValue, allPlayers));
  };

  const openModal = (id: number, team: TeamNames, numberOfGoals: number) => {
    setModalInitState({ team, id, numberOfGoals });
  };

  return (
    <main className={styles.main}>
      {modalInitState ? (
        <ModalWindowContainer
          setModalInitState={setModalInitState}
          team={modalInitState.team}
          id={modalInitState.id}
          numberOfGoals={modalInitState.numberOfGoals}
        />
      ) : null}
      <h1 className={styles.header}>Best EPL goal scorers</h1>
      <h2 className={styles.subHeader}>
        This is the best 100 EPL goal scorers. Using search you can find any EPL
        goal scorer.
        <br />
        Click on a player to see more info
      </h2>
      <SearchBar
        value={searchValue}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <div className={styles.playersContainer} role="article">
        {(() => {
          if (isListLoading) {
            return <LoadingIndicator />;
          }
          if (isServerError) {
            return (
              <div className={styles.serverError}>
                Server error. You have exceeded the allowed number of requests
                per minute. Please wait and try again
              </div>
            );
          }
          if (filteredPlayers.length === 0) {
            return <div className={styles.serverError}>Zero players found</div>;
          }
          return filteredPlayers.map(
            ({ player, numberOfGoals, team }, index) => (
              <SmallPlayerCard
                position={index + 1}
                player={player}
                team={team}
                numberOfGoals={numberOfGoals}
                key={player.id}
                openModal={openModal}
              />
            )
          );
        })()}
      </div>
    </main>
  );
};

export default MainPage;
