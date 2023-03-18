import { Positions, TeamNames } from '../../enums';

export interface IPlayer {
  name: string;
  team: TeamNames;
  form: number;
  price: number;
  selected: number;
  position: Positions;
  img: string;
  id: number;
}

const players: IPlayer[] = [
  {
    name: 'David Raya',
    team: TeamNames.BRE,
    form: 2.8,
    price: 4.8,
    selected: 15.6,
    position: Positions.GK,
    img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p154561.png',
    id: 1,
  },
  {
    name: 'Nick Pope',
    team: TeamNames.NEW,
    form: 1.0,
    price: 5.4,
    selected: 20.9,
    position: Positions.GK,
    img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p98747.png',
    id: 2,
  },
  {
    name: 'Kieran Trippier',
    team: TeamNames.NEW,
    form: 2.2,
    price: 6.0,
    selected: 64.9,
    position: Positions.DEF,
    img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p77794.png',
    id: 3,
  },
  {
    name: 'Oleksandr Zinchenko',
    team: TeamNames.ARS,
    form: 5.5,
    price: 5.2,
    selected: 14.5,
    position: Positions.DEF,
    img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p206325.png',
    id: 4,
  },
  {
    name: 'Pervis Estupiñán',
    team: TeamNames.BHA,
    form: 3.8,
    price: 4.8,
    selected: 11.7,
    position: Positions.DEF,
    img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p204214.png',
    id: 5,
  },
  {
    name: 'Pedro Porro',
    team: TeamNames.TOT,
    form: 3.0,
    price: 4.8,
    selected: 0.3,
    position: Positions.DEF,
    img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p441164.png',
    id: 6,
  },
  {
    name: 'Lewis Dunk',
    team: TeamNames.BHA,
    form: 2.2,
    price: 4.7,
    selected: 5.1,
    position: Positions.DEF,
    img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p83299.png',
    id: 7,
  },
  {
    name: 'Kaoru Mitoma',
    team: TeamNames.BHA,
    form: 4.6,
    price: 5.5,
    selected: 22.4,
    position: Positions.MID,
    img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p451340.png',
    id: 8,
  },
  {
    name: 'Gabriel Martinelli',
    team: TeamNames.ARS,
    form: 7.3,
    price: 6.6,
    selected: 37.5,
    position: Positions.MID,
    img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p444145.png',
    id: 9,
  },
  {
    name: 'James Maddison',
    team: TeamNames.LEI,
    form: 1.2,
    price: 8.1,
    selected: 5.8,
    position: Positions.MID,
    img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p172780.png',
    id: 10,
  },
  {
    name: 'Mohamed Salah',
    team: TeamNames.LIV,
    form: 8.2,
    price: 12.8,
    selected: 28.0,
    position: Positions.MID,
    img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p118748.png',
    id: 11,
  },
  {
    name: 'Marcus Rashford',
    team: TeamNames.MUN,
    form: 7.0,
    price: 7.4,
    selected: 53.8,
    position: Positions.MID,
    img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p176297.png',
    id: 12,
  },
  {
    name: 'Erling Haaland',
    team: TeamNames.MCI,
    form: 5.3,
    price: 12.2,
    selected: 82.3,
    position: Positions.FWD,
    img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p223094.png',
    id: 13,
  },
  {
    name: 'Ivan Toney',
    team: TeamNames.BRE,
    form: 3.0,
    price: 7.8,
    selected: 39.6,
    position: Positions.FWD,
    img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p144485.png',
    id: 14,
  },
  {
    name: 'Ollie Watkins',
    team: TeamNames.AVL,
    form: 6.2,
    price: 7.3,
    selected: 9.5,
    position: Positions.FWD,
    img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p178301.png',
    id: 15,
  },
  {
    name: 'Harry Kane',
    team: TeamNames.TOT,
    form: 6.5,
    price: 11.7,
    selected: 38.5,
    position: Positions.FWD,
    img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p78830.png',
    id: 16,
  },
];

export default players;
