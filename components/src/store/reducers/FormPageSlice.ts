import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlayerCard } from '../../interfaces';

interface IFormPageState {
  newCards: IPlayerCard[];
}

const initialState: IFormPageState = {
  newCards: [],
};

export const formPageSlice = createSlice({
  name: 'formPageReducer',
  initialState,
  reducers: {
    addNewCard(state, action: PayloadAction<IPlayerCard>) {
      state.newCards = [...state.newCards, action.payload];
    },
  },
});

export default formPageSlice.reducer;
