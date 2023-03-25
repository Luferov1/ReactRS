import { Ref } from 'react';
import { InputTypes, Positions } from '../enums';

export interface IFormProps {
  text?: string;
}

export interface IFormState {
  nameError: boolean;
  teamError: boolean;
  dateError: boolean;
  positionError: boolean;
  imageError: boolean;
  isSubmitted: boolean;
}

export interface IValidInput {
  text: string;
  type: InputTypes;
}
export interface IInputData extends IValidInput {
  ref: Ref<HTMLInputElement> | undefined;
  errorText: string;
  state: boolean;
}

export interface IPositionData {
  text: Positions;
  ref: Ref<HTMLInputElement> | undefined;
}

export interface IRangeInput {
  id: string;
  min: number;
  max: number;
  step: number;
}

export interface IRangeData extends IRangeInput {
  ref: Ref<HTMLInputElement> | undefined;
}
