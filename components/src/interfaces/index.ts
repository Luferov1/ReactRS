import { ChangeHandler } from 'react-hook-form';
import { InputTypes, Positions, TeamNames } from '../enums';

export interface IValidInput {
  text: string;
  type: InputTypes;
  name: string;
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
}

export interface IRangeInput {
  id: string;
  min: number;
  max: number;
  step: number;
  name: string;
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
}

export interface IPlayer {
  player: {
    id: number;
    name: string;
  };
  numberOfGoals: number;
}

export interface ISearchBar {
  searchBar: string;
}

export interface Scorers {
  player: {
    name: string;
    id: number;
  };
  team: {
    name: TeamNames;
  };
  numberOfGoals: number;
}

export interface ScorersResponse {
  scorers: Scorers[];
}

export interface PlayerInfo {
  id: number;
  dateOfBirth: string;
  nationality: string;
  position: string;
  name: string;
}

export interface FullPlayerInfo extends PlayerInfo {
  team: TeamNames;
  numberOfGoals: number;
}

export interface ModalInitialState {
  id: number;
  team: TeamNames;
  numberOfGoals: number;
}

export interface IFormInputs {
  nameInput: string;
  dateInput: string;
  fileInput: FileList;
  selectInput: string;
  positionInput: Positions | null;
  ownershipInput: number;
  priceInput: number;
  checkbox: boolean;
}

export interface IPlayerCard {
  name: string;
  team: TeamNames;
  birthDate: string;
  price: number;
  selected: number;
  position: Positions;
  img: string;
}
