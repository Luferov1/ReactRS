import { Ref } from 'react';
import { ChangeHandler } from 'react-hook-form';
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
  name: string;
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
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
  name: string;
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
}

export interface IRangeData extends IRangeInput {
  ref: Ref<HTMLInputElement> | undefined;
}
