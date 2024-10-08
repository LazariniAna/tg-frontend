import { configureStore } from '@reduxjs/toolkit';
import {menuReducer} from './reducers/menuReducer';

const store = configureStore({
  reducer: {
    menu: menuReducer,
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;