import React, { Component, RefObject } from 'react';
import { InputTypes, Positions, TeamNames } from '../../../enums';
import {
  IFormProps,
  IFormState,
  IPositionData,
  IRangeData,
} from '../../../interfaces';
import styles from './style.module.scss';
import ValidInput from './ValidInput';
import PositionsRadio from './PositionsRadio';
import RangeInput from './RangeInput';
import SubmittedMessage from './SubmittedMessage';
import playersInfo, { IPlayer } from '../../../constants/playersInfo';

class Form extends Component<IFormProps, IFormState> {
  nameInput: RefObject<HTMLInputElement>;

  dateInput: RefObject<HTMLInputElement> | undefined;

  imageInput: RefObject<HTMLInputElement> | undefined;

  goalkeeperRadio: RefObject<HTMLInputElement> | undefined;

  defenderRadio: RefObject<HTMLInputElement> | undefined;

  midfielderRadio: RefObject<HTMLInputElement> | undefined;

  forwardRadio: RefObject<HTMLInputElement> | undefined;

  priceInput: RefObject<HTMLInputElement> | undefined;

  teamInput: RefObject<HTMLSelectElement> | undefined;

  checkboxInput: RefObject<HTMLInputElement> | undefined;

  ownershipInput: RefObject<HTMLInputElement> | undefined;

  positionsData: IPositionData[];

  rangeData: IRangeData[];

  constructor(props: IFormProps) {
    super(props);
    this.state = {
      dateError: false,
      imageError: false,
      nameError: false,
      positionError: false,
      teamError: false,
      isSubmitted: false,
    };
    this.nameInput = React.createRef();
    this.dateInput = React.createRef();
    this.imageInput = React.createRef();
    this.goalkeeperRadio = React.createRef();
    this.defenderRadio = React.createRef();
    this.midfielderRadio = React.createRef();
    this.forwardRadio = React.createRef();
    this.priceInput = React.createRef();
    this.teamInput = React.createRef();
    this.checkboxInput = React.createRef();
    this.ownershipInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);

    this.positionsData = [
      {
        text: Positions.GK,
        ref: this.goalkeeperRadio,
      },
      {
        text: Positions.DEF,
        ref: this.defenderRadio,
      },
      {
        text: Positions.MID,
        ref: this.midfielderRadio,
      },
      {
        text: Positions.FWD,
        ref: this.forwardRadio,
      },
    ];
    this.rangeData = [
      {
        ref: this.priceInput,
        max: 13,
        min: 4,
        id: 'price',
        step: 0.5,
      },
      {
        ref: this.ownershipInput,
        max: 100,
        min: 0,
        id: 'ownership',
        step: 0.5,
      },
    ];
  }

  handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const name = this.getName();
    const birthDate = this.getDate();
    const img = this.getImage();
    const team = this.getTeam();
    const position = this.getPosition();
    const price = this.getPrice();
    const selected = this.getOwnership();
    if (name && birthDate && img && team && position) {
      const newPlayer: IPlayer = {
        price,
        birthDate,
        name,
        position,
        img,
        team,
        id: playersInfo.length + 1,
        selected,
      };
      playersInfo.push(newPlayer);
      this.showMessage();
      this.clearInputs();
    }
  }

  private getName() {
    const value = this.nameInput.current?.value;
    if (!value || value.length < 3 || value.length > 20) {
      this.setState({ nameError: true });
      return '';
    }
    this.setState({ nameError: false });
    return value;
  }

  private getDate() {
    const value = this.dateInput?.current?.value;
    if (!value) {
      this.setState({ dateError: true });
      return '';
    }
    this.setState({ dateError: false });
    return value.split('-').reverse().join('.');
  }

  private getImage() {
    const value = this.imageInput?.current?.files;
    if (!value) {
      this.setState({ imageError: true });
      return '';
    }
    this.setState({ imageError: false });
    return URL.createObjectURL(value[0]);
  }

  private getTeam() {
    const value = this.teamInput?.current?.value;
    if (!value || value === 'default') {
      this.setState({ teamError: true });
      return '';
    }
    this.setState({ teamError: false });
    const keys = Object.keys(TeamNames);
    const values = Object.values(TeamNames);
    const index = keys.indexOf(value);
    return values[index];
  }

  private getPosition() {
    const arr = [
      this.goalkeeperRadio?.current?.checked,
      this.defenderRadio?.current?.checked,
      this.midfielderRadio?.current?.checked,
      this.forwardRadio?.current?.checked,
    ];
    const index = arr.indexOf(true);
    if (index === -1) {
      this.setState({ positionError: true });
      return '';
    }
    this.setState({ positionError: false });
    return Object.values(Positions)[index];
  }

  private getPrice() {
    const value = this.priceInput?.current?.value;
    if (!value) return 4;
    return Number(value);
  }

  private getOwnership() {
    const value = this.ownershipInput?.current?.value;
    if (!value) return 4;
    return Number(value);
  }

  private showMessage() {
    this.setState({ isSubmitted: true });
    setTimeout(() => {
      this.setState({ isSubmitted: false });
    }, 3000);
  }

  private clearInputs() {
    const inputs = [
      this.nameInput.current,
      this.dateInput?.current,
      this.imageInput?.current,
    ];
    const radios = [
      this.goalkeeperRadio?.current,
      this.defenderRadio?.current,
      this.midfielderRadio?.current,
      this.forwardRadio?.current,
    ];
    if (this.teamInput?.current?.value) {
      this.teamInput.current.value = 'default';
    }
    inputs.forEach((input) => {
      if (input) input.value = '';
    });
    radios.forEach((radio) => {
      if (radio) radio.checked = false;
    });
    const checkbox = this.checkboxInput?.current;
    const price = this.priceInput?.current;
    const ownership = this.ownershipInput?.current;
    if (checkbox) checkbox.checked = false;
    if (ownership) ownership.value = String(50);
    if (price) price.value = String(8.5);
  }

  render() {
    const {
      teamError,
      positionError,
      isSubmitted,
      nameError,
      imageError,
      dateError,
    } = this.state;
    const teamNames = Object.keys(TeamNames);
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <ValidInput text="Name" type={InputTypes.Text} ref={this.nameInput} />
        {nameError ? (
          <span className={styles.errorMessage}>3-20 symbols</span>
        ) : null}
        <ValidInput
          text="Date of birth"
          type={InputTypes.Date}
          ref={this.dateInput}
        />
        {dateError ? (
          <span className={styles.errorMessage}>Select the date</span>
        ) : null}
        <ValidInput
          text="Upload player's image"
          type={InputTypes.File}
          ref={this.imageInput}
        />
        {imageError ? (
          <span className={styles.errorMessage}>Upload image</span>
        ) : null}
        <select
          ref={this.teamInput}
          defaultValue="default"
          className={styles.select}
        >
          <option disabled value="default" className={styles.option}>
            Select team
          </option>
          {teamNames.map((name) => (
            <option value={name} key={name} className={styles.option}>
              {name}
            </option>
          ))}
        </select>
        {teamError ? (
          <span className={styles.errorMessage}>You must select team</span>
        ) : null}
        <span>Position</span>
        <div className={styles.positions}>
          {this.positionsData.map(({ text, ref }) => (
            <PositionsRadio text={text} ref={ref} key={text} />
          ))}
        </div>
        {positionError ? (
          <span className={styles.errorMessage}>You must select position</span>
        ) : null}
        {this.rangeData.map(({ ref, max, min, id, step }) => (
          <RangeInput
            id={id}
            min={min}
            max={max}
            step={step}
            key={id}
            ref={ref}
          />
        ))}
        <label htmlFor="checkbox" className={styles.checkBox}>
          This player is real
          <input
            id="checkbox"
            type={InputTypes.Checkbox}
            ref={this.checkboxInput}
          />
        </label>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
        {isSubmitted ? <SubmittedMessage /> : null}
      </form>
    );
  }
}

export default Form;
