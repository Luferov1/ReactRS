import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalInitialState } from '../../interfaces';
import { TeamNames } from '../../enums';

interface IMainPageState {
  searchValue: string;
  modalInitState: ModalInitialState;
  isModalOpened: boolean;
}

const initialState: IMainPageState = {
  searchValue: '',
  modalInitState: {
    id: 100,
    team: TeamNames.WHU,
    numberOfGoals: 1,
  },
  isModalOpened: false,
};

export const mainPageSlice = createSlice({
  name: 'mainPageReducer',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setModalInitState(state, action: PayloadAction<ModalInitialState>) {
      state.modalInitState = action.payload;
    },
    setIsModalOpened(state, action: PayloadAction<boolean>) {
      state.isModalOpened = action.payload;
    },
  },
});

export default mainPageSlice.reducer;
