import { createSlice } from '@reduxjs/toolkit';
import { charactersThunk } from '../../services/characters';
import { FetchStatus } from '../types/fetchStatus';
import { ErrorData } from '../types/errorData';
import { CharactersRes } from '../types/dataCharacters';

export interface ListSlice {
  fetchStatus: FetchStatus;
  errorData: ErrorData | null;
  dataCharacters: CharactersRes['data'] | null;
}

const initialState: ListSlice = {
  fetchStatus: 'idle',
  errorData: null,
  dataCharacters: null,
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {},
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
      });
  },
});

export default listSlice.reducer;
