import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  charactersThunk,
  charactersByIdThunk,
} from '../../services/characters';
import { FetchStatus } from '../types/fetchStatus';
import { ErrorData } from '../types/errorData';
import { CharactersRes, Character } from '../types/dataCharacters';

export interface CharactersSlice {
  fetchStatus: FetchStatus;
  errorData: ErrorData | null;
  dataCharacters: CharactersRes['data'] | null;
  valueSearch: string;
  characterSelected: Character | null;
}

const initialState: CharactersSlice = {
  fetchStatus: 'idle',
  errorData: null,
  dataCharacters: null,
  valueSearch: '',
  characterSelected: null,
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setValueSearch(state, action: PayloadAction<{ value: string }>) {
      state.valueSearch = action.payload.value;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(charactersThunk.pending, (state) => {
        state.fetchStatus = 'loading';
      })
      .addCase(charactersThunk.fulfilled, (state, action) => {
        state.fetchStatus = 'succeeded';
        state.dataCharacters = action.payload;
      })
      .addCase(charactersThunk.rejected, (state, action) => {
        state.fetchStatus = 'failed';
        state.errorData = action.payload as ErrorData;
      })
      .addCase(charactersByIdThunk.pending, (state) => {
        state.fetchStatus = 'loading';
      })
      .addCase(charactersByIdThunk.fulfilled, (state, action) => {
        state.fetchStatus = 'succeeded';
        state.characterSelected =
          action.payload.results &&
          Array.isArray(action.payload.results) &&
          action.payload.results.length
            ? action.payload.results[0]
            : ({} as Character);
      })
      .addCase(charactersByIdThunk.rejected, (state, action) => {
        state.fetchStatus = 'failed';
        state.errorData = action.payload as ErrorData;
      });
  },
});

export default charactersSlice.reducer;
export const { setValueSearch } = charactersSlice.actions;
