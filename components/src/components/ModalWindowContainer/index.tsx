import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import LoadingIndicator from '../LoadingIndicator';
import { FullPlayerInfo, ModalInitialState } from '../../interfaces';
import { fetchPlayerById } from '../../functions';
import ModalWindow from './ModalWindow';

interface Props extends ModalInitialState {
  setModalInitState: React.Dispatch<
    React.SetStateAction<ModalInitialState | null>
  >;
}

const ModalWindowContainer = ({
  id,
  setModalInitState,
  team,
  numberOfGoals,
}: Props) => {
  const [isLoading, setLoading] = useState(true);
  const [state, setState] = useState<FullPlayerInfo | null>(null);
  useEffect(() => {
    fetchPlayerById(id, setLoading).then((data) => {
      if (data) {
        setState({
          team,
          id,
          nationality: data.nationality,
          name: data.name,
          position: data.position,
          numberOfGoals,
          dateOfBirth: data.dateOfBirth,
        });
      }
    });
  }, []);

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <button
      className={styles.background}
      onClick={() => setModalInitState(null)}
      type="button"
    >
      {(() => {
        if (isLoading) {
          return <LoadingIndicator />;
        }
        if (!state) {
          return (
            <button
              className={styles.serverError}
              onClick={handleClick}
              type="button"
            >
              Server error. You have exceeded the allowed number of requests per
              minute. Please wait and try again
            </button>
          );
        }
        return (
          <ModalWindow
            handleClick={handleClick}
            team={state.team}
            numberOfGoals={state.numberOfGoals}
            id={state.id}
            dateOfBirth={state.dateOfBirth}
            nationality={state.nationality}
            position={state.position}
            name={state.name}
          />
        );
      })()}
    </button>
  );
};

export default ModalWindowContainer;
