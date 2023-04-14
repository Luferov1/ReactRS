import React from 'react';
import styles from './style.module.scss';
import LoadingIndicator from '../LoadingIndicator';
import ModalWindow from './ModalWindow';
import { useAppSelector } from '../../hooks';
import playersAPI from '../../services';

const ModalWindowContainer = () => {
  const { modalInitState } = useAppSelector(
    (rootState) => rootState.mainPageReducer
  );
  const { team, id, numberOfGoals } = modalInitState;
  const {
    data: info,
    isLoading,
    isError,
  } = playersAPI.useFetchPlayerByIdQuery(id);

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <>
      {isLoading && <LoadingIndicator />}
      {isError && (
        <button
          className={styles.serverError}
          onClick={handleClick}
          type="button"
        >
          Server error. You have exceeded the allowed number of requests per
          minute. Please wait and try again
        </button>
      )}
      {info && (
        <ModalWindow
          handleClick={handleClick}
          team={team}
          numberOfGoals={numberOfGoals}
          id={id}
          dateOfBirth={info.dateOfBirth}
          nationality={info.nationality}
          position={info.position}
          name={info.name}
        />
      )}
    </>
  );
};

export default ModalWindowContainer;
