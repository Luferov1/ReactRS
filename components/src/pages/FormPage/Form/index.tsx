import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { InputTypes, Positions, TeamNames } from '../../../enums';
import styles from './style.module.scss';
import ValidInput from './ValidInput';
import PositionsRadio from './PositionsRadio';
import RangeInput from './RangeInput';
import SubmittedMessage from './SubmittedMessage';
import players, { IPlayer } from '../../../constants/playersInfo';

interface IFormInputs {
  nameInput: string;
  dateInput: string;
  fileInput: FileList;
  selectInput: string;
  positionInput: Positions | null;
  ownershipInput: number;
  priceInput: number;
  checkbox: boolean;
}

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInputs>();
  const showMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    const keys = Object.keys(TeamNames);
    const values = Object.values(TeamNames);
    const index = keys.indexOf(data.selectInput);
    const newPlayer: IPlayer = {
      name: data.nameInput,
      birthDate: data.dateInput.split('-').reverse().join('.'),
      selected: data.ownershipInput,
      img: URL.createObjectURL(data.fileInput[0]),
      id: players.length + 1,
      team: values[index],
      position: data.positionInput as Positions,
      price: data.priceInput,
    };
    players.push(newPlayer);
    reset();
    showMessage();
  };
  const teamNames = Object.keys(TeamNames);
  const nameInput = register('nameInput', {
    required: true,
    minLength: 3,
  });
  const dateInput = register('dateInput', {
    required: true,
  });
  const fileInput = register('fileInput', {
    required: true,
  });
  const selectInput = register('selectInput', {
    required: true,
  });
  const positionInput = register('positionInput', {
    required: true,
  });
  const ownershipInput = register('ownershipInput');
  const priceInput = register('priceInput');
  const checkbox = register('checkbox');
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <ValidInput
        text="Name"
        type={InputTypes.Text}
        ref={nameInput.ref}
        name={nameInput.name}
        onChange={nameInput.onChange}
        onBlur={nameInput.onBlur}
      />
      {errors.nameInput && errors.nameInput.type === 'required' && (
        <span className={styles.errorMessage}>Name is required</span>
      )}
      {errors.nameInput && errors.nameInput.type === 'minLength' && (
        <span className={styles.errorMessage}>At least 3 symbols</span>
      )}
      <ValidInput
        text="Date of birth"
        type={InputTypes.Date}
        name={dateInput.name}
        onChange={dateInput.onChange}
        onBlur={dateInput.onBlur}
        ref={dateInput.ref}
      />
      {errors.dateInput && (
        <span className={styles.errorMessage}>Date is required</span>
      )}
      <ValidInput
        text="Upload player's image"
        type={InputTypes.File}
        name={fileInput.name}
        onChange={fileInput.onChange}
        onBlur={fileInput.onBlur}
        ref={fileInput.ref}
      />
      {errors.fileInput && (
        <span className={styles.errorMessage}>Uploading image is required</span>
      )}
      <select
        ref={selectInput.ref}
        name={selectInput.name}
        onChange={selectInput.onChange}
        onBlur={selectInput.onBlur}
        className={styles.select}
        defaultValue=""
      >
        <option disabled value="" className={styles.option}>
          Select team
        </option>
        {teamNames.map((name) => (
          <option value={name} key={name} className={styles.option}>
            {name}
          </option>
        ))}
      </select>
      {errors.selectInput && (
        <span className={styles.errorMessage}>Selecting team is required</span>
      )}
      <span>Position</span>
      <div className={styles.positions}>
        <PositionsRadio
          text={Positions.GK}
          ref={positionInput.ref}
          onChange={positionInput.onChange}
          onBlur={positionInput.onBlur}
          name={positionInput.name}
        />
        <PositionsRadio
          text={Positions.DEF}
          ref={positionInput.ref}
          onChange={positionInput.onChange}
          onBlur={positionInput.onBlur}
          name={positionInput.name}
        />
        <PositionsRadio
          text={Positions.MID}
          ref={positionInput.ref}
          onChange={positionInput.onChange}
          onBlur={positionInput.onBlur}
          name={positionInput.name}
        />
        <PositionsRadio
          text={Positions.FWD}
          ref={positionInput.ref}
          onChange={positionInput.onChange}
          onBlur={positionInput.onBlur}
          name={positionInput.name}
        />
      </div>
      {errors.positionInput && (
        <span className={styles.errorMessage}>
          Selecting position is required
        </span>
      )}
      <RangeInput
        id="price"
        min={4}
        max={13}
        step={0.5}
        ref={priceInput.ref}
        name={priceInput.name}
        onChange={priceInput.onChange}
        onBlur={priceInput.onBlur}
      />
      <RangeInput
        id="ownership"
        min={0}
        max={100}
        step={0.5}
        ref={ownershipInput.ref}
        onChange={ownershipInput.onChange}
        onBlur={ownershipInput.onBlur}
        name={ownershipInput.name}
      />
      <label htmlFor="checkbox" className={styles.checkBox}>
        This player is real
        <input
          id="checkbox"
          type={InputTypes.Checkbox}
          ref={checkbox.ref}
          onChange={checkbox.onChange}
          onBlur={checkbox.onBlur}
          name={checkbox.name}
        />
      </label>
      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
      {isSubmitted ? <SubmittedMessage /> : null}
    </form>
  );
};

export default Form;
