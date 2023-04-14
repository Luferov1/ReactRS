import { IFormInputs, IPlayerCard, Scorers } from '../interfaces';
import { Positions, TeamNames } from '../enums';

export const filterPlayersArr = (str: string, players: Scorers[]) => {
  return players.filter(({ player }) =>
    player.name.toLowerCase().includes(str.toLowerCase())
  );
};

let id = 0;

export const generateUniqueId = (text: string) => {
  const value = `${text}${id}`;
  id += 1;
  return value;
};
export const createNewPlayerCard = (data: IFormInputs): IPlayerCard => {
  const keys = Object.keys(TeamNames);
  const values = Object.values(TeamNames);
  const index = keys.indexOf(data.selectInput);
  return {
    name: data.nameInput,
    birthDate: data.dateInput.split('-').reverse().join('.'),
    selected: data.ownershipInput,
    img: URL.createObjectURL(data.fileInput[0]),
    team: values[index],
    position: data.positionInput as Positions,
    price: data.priceInput,
  };
};
