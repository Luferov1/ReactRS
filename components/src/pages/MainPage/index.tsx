import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar';
import styles from './style.module.scss';
import PlayerCard from '../../components/PlayerCard';
import players from '../../constants/playersInfo';

interface Props {
  text?: string;
}

interface State {
  value: string;
}
class MainPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    const value = localStorage.getItem('value');
    if (value) {
      this.state = { value };
    } else {
      this.state = { value: '' };
    }
  }

  componentWillUnmount() {
    const { value } = this.state;
    localStorage.setItem('value', value);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    return (
      <main className={styles.main}>
        <h1 className={styles.header}>Best FPL assets</h1>
        <h2 className={styles.subHeader}>
          This is the best FPL assets for the upcoming GWs
        </h2>
        <SearchBar value={value} onChange={this.handleChange} />
        <div className={styles.playersContainer}>
          {players
            .sort(() => Math.random() - 0.5)
            .map(({ name, price, form, img, team, position, selected }) => (
              <PlayerCard
                name={name}
                team={team}
                form={form}
                price={price}
                selected={selected}
                position={position}
                img={img}
              />
            ))}
        </div>
      </main>
    );
  }
}

export default MainPage;
