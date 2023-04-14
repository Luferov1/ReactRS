import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import SearchBar from '../../components/SearchBar';
import styles from './style.module.scss';
import { filterPlayersArr } from '../../functions';
import SmallPlayerCard from '../../components/SmallPlayerCard';
import LoadingIndicator from '../../components/LoadingIndicator';
import { InputTypes, TeamNames } from '../../enums';
import ModalWindowContainer from '../../components/ModalWindowContainer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { mainPageSlice } from '../../store/reducers/MainPageSlice';
import playersAPI from '../../services';
import { ISearchBar } from '../../interfaces';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const { searchValue, isModalOpened } = useAppSelector(
    (state) => state.mainPageReducer
  );
  const {
    data: players,
    error,
    isLoading,
  } = playersAPI.useFetchPlayersQuery(1000);

  const { setSearchValue, setModalInitState, setIsModalOpened } =
    mainPageSlice.actions;
  const { register, handleSubmit, setValue } = useForm<ISearchBar>();
  const searchBar = register('searchBar');

  const onSubmit: SubmitHandler<ISearchBar> = (data) => {
    dispatch(setSearchValue(data.searchBar));
  };

  const openModal = (id: number, team: TeamNames, numberOfGoals: number) => {
    dispatch(setModalInitState({ team, id, numberOfGoals }));
    dispatch(setIsModalOpened(true));
  };

  useEffect(() => setValue('searchBar', searchValue), []);

  return (
    <main className={styles.main}>
      {isModalOpened && <ModalWindowContainer />}
      <h1 className={styles.header}>Best EPL goal scorers</h1>
      <h2 className={styles.subHeader}>
        This is the best 100 EPL goal scorers. Using search you can find any EPL
        goal scorer.
        <br />
        Click on a player to see more info
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.searchBar}>
        <SearchBar
          text="Search"
          type={InputTypes.Text}
          name={searchBar.name}
          onChange={searchBar.onChange}
          onBlur={searchBar.onBlur}
          ref={searchBar.ref}
        />
      </form>
      <div className={styles.playersContainer} role="article">
        {isLoading && <LoadingIndicator />}
        {error && (
          <div className={styles.serverError}>Server error. Try again</div>
        )}
        {players &&
          filterPlayersArr(searchValue, players.scorers).map(
            ({ player, numberOfGoals, team }, index) =>
              index < 100 && (
                <SmallPlayerCard
                  position={index + 1}
                  player={player}
                  team={team}
                  numberOfGoals={numberOfGoals}
                  key={player.id}
                  openModal={openModal}
                />
              )
          )}
        {players &&
        filterPlayersArr(searchValue, players.scorers).length === 0 ? (
          <div className={styles.serverError}>Zero players found</div>
        ) : null}
      </div>
    </main>
  );
};

export default MainPage;
