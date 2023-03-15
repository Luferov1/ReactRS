import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar';
import styles from './style.module.scss';
import PlayerCard from '../../components/PlayerCard';
import players from '../../constants/playersInfo';
import { fillArray, filterPlayersArr } from '../../functions';

interface Props {
  text?: string;
}

interface State {
  value: string;
  filteredPlayers: number[];
}
class MainPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    const value = localStorage.getItem('value');
    if (value) {
      this.state = { value, filteredPlayers: filterPlayersArr(value) };
    } else {
      this.state = {
        value: '',
        filteredPlayers: fillArray(1, players.length),
      };
    }
  }

  componentWillUnmount() {
    const { value } = this.state;
    localStorage.setItem('value', value);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const targetValue = event.target.value;
    this.setState({
      value: targetValue,
      filteredPlayers: filterPlayersArr(targetValue),
    });
  }

  render() {
    const { value, filteredPlayers } = this.state;
    return (
      <main className={styles.main}>
        <h1 className={styles.header}>Best FPL assets</h1>
        <h2 className={styles.subHeader}>
          This is the best FPL assets for the upcoming GWs
        </h2>
        <SearchBar value={value} onChange={this.handleChange} />
        <div className={styles.playersContainer} role="article">
          {players
            .filter(({ id }) => {
              return filteredPlayers.includes(id);
            })
            .map(({ name, price, form, img, team, position, selected, id }) => (
              <PlayerCard
                name={name}
                team={team}
                form={form}
                price={price}
                selected={selected}
                position={position}
                img={img}
                id={id}
                key={`Player${id}`}
              />
            ))}
        </div>
      </main>
    );
  }
}

export default MainPage;
