import players from '../constants/playersInfo';

export const fillArray = (start: number, end: number) => {
  const arr = [];
  for (let i = start; i <= end; i += 1) {
    arr.push(i);
  }
  return arr;
};

export const filterPlayersArr = (str: string) => {
  const filteredPlayers: number[] = [];
  players.forEach(({ position, selected, form, team, price, name, id }) => {
    if (
      position.toLowerCase().includes(str.toLowerCase()) ||
      String(selected).includes(str) ||
      String(form).includes(str) ||
      team.toLowerCase().includes(str.toLowerCase()) ||
      String(price).includes(str) ||
      name.toLowerCase().includes(str.toLowerCase())
    ) {
      filteredPlayers.push(id);
    }
  });
  return filteredPlayers;
};
