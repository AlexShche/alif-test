import { combineReducers, configureStore } from '@reduxjs/toolkit';
import recipes from './reducers/recipes';

const rootReducer = combineReducers({
  recipes,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootReducer = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
