import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';

import charactersReducer from './slices/charactersSlice';

const rootReducer = combineReducers({
  characters: charactersReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
