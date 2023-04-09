import React from 'react';
import styles from './style.module.scss';
import { Scorers } from '../../interfaces';
import premierLeagueTeamLogos from '../../constants/TeamsLogos';
import { TeamNames } from '../../enums';

interface Props extends Scorers {
  position: number;
  openModal: (id: number, team: TeamNames, numberOfGoals: number) => void;
}
const SmallPlayerCard = ({
  player,
  numberOfGoals,
  team,
  position,
  openModal,
}: Props) => {
  const { name, id } = player;
  const teamKeys = Object.keys(TeamNames);
  const teamValues = Object.values(TeamNames);
  const teamName = teamKeys[teamValues.indexOf(team.name)];
  return (
    <button
      className={styles.container}
      onClick={() => {
        openModal(id, team.name, numberOfGoals);
      }}
      type="button"
    >
      <div className={styles.position}>{position}</div>
      <div className={styles.name}>{name}</div>
      <div className={styles.team}>
        <img
          src={premierLeagueTeamLogos[team.name]}
          alt={team.name}
          className={styles.teamImg}
        />
        <span className={styles.teamName}>{teamName}</span>
      </div>
      <div className={styles.numberOfGoals}>{numberOfGoals}</div>
    </button>
  );
};

export default SmallPlayerCard;
