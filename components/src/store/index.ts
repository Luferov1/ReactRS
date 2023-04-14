import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mainPageReducer from './reducers/MainPageSlice';
import formPageReducer from './reducers/FormPageSlice';
import playersAPI from '../services';

const rootReducer = combineReducers({
  mainPageReducer,
  formPageReducer,
  [playersAPI.reducerPath]: playersAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(playersAPI.middleware);
    },
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
