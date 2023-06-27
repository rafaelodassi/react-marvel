import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  charactersThunk,
  charactersByIdThunk,
  comicsByCharactersThunk,
} from '../../services/characters';
import { FetchStatus } from '../types/fetchStatus';
import { ErrorData } from '../types/errorData';
import { CharactersRes, Character, ComicsRes } from '../types/characters';

export interface CharactersSlice {
  fetchStatusCharacters: FetchStatus;
  errorDataCharacters: ErrorData | null;
  characters: CharactersRes['data'] | null;
  fetchStatusComics: FetchStatus;
  errorDataComics: ErrorData | null;
  comics: ComicsRes['data'] | null;
  valueSearch: string;
  characterSelected: Character | null;
}

const initialState: CharactersSlice = {
  fetchStatusCharacters: 'idle',
  errorDataCharacters: null,
  characters: null,
  fetchStatusComics: 'idle',
  errorDataComics: null,
  comics: null,
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
    clearCharacterSelected(state) {
      state.characterSelected = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(charactersThunk.pending, (state) => {
        state.fetchStatusCharacters = 'loading';
        state.errorDataCharacters = null;
        state.characters = null;
      })
      .addCase(charactersThunk.fulfilled, (state, action) => {
        state.fetchStatusCharacters = 'succeeded';
        state.characters = action.payload;
      })
      .addCase(charactersThunk.rejected, (state, action) => {
        state.fetchStatusCharacters = 'failed';
        state.errorDataCharacters = action.payload as ErrorData;
      })
      .addCase(charactersByIdThunk.pending, (state) => {
        state.fetchStatusCharacters = 'loading';
        state.errorDataCharacters = null;
        state.characters = null;
      })
      .addCase(charactersByIdThunk.fulfilled, (state, action) => {
        state.fetchStatusCharacters = 'succeeded';
        state.characterSelected =
          action.payload.results &&
          Array.isArray(action.payload.results) &&
          action.payload.results.length
            ? action.payload.results[0]
            : ({} as Character);
      })
      .addCase(charactersByIdThunk.rejected, (state, action) => {
        state.fetchStatusCharacters = 'failed';
        state.errorDataCharacters = action.payload as ErrorData;
      })
      .addCase(comicsByCharactersThunk.pending, (state) => {
        state.fetchStatusComics = 'loading';
        state.errorDataComics = null;
        state.comics = null;
      })
      .addCase(comicsByCharactersThunk.fulfilled, (state, action) => {
        state.fetchStatusComics = 'succeeded';
        state.comics = action.payload;
      })
      .addCase(comicsByCharactersThunk.rejected, (state, action) => {
        state.fetchStatusComics = 'failed';
        state.errorDataComics = action.payload as ErrorData;
      });
  },
});

export default charactersSlice.reducer;
export const { setValueSearch, clearCharacterSelected } =
  charactersSlice.actions;
