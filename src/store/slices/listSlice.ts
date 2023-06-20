import { createSlice } from '@reduxjs/toolkit';
import { charactersThunk } from '../../services/characters';
import { FetchStatus } from '../types/fetchStatus';
import { ErrorData } from '../types/errorData';

export interface InterestsNegotiationSlice {
  fetchStatus: FetchStatus;
  errorData: ErrorData;
  authSuccess: boolean;
}

const initialState: InterestsNegotiationSlice = {
  fetchStatus: 'idle',
  errorData: {} as ErrorData,
  authSuccess: false,
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
        state.authSuccess = true;
      })
      .addCase(charactersThunk.rejected, (state, action) => {
        state.fetchStatus = 'failed';
        state.errorData = action.payload as ErrorData;
      });
  },
});

export default listSlice.reducer;
