import { AxiosResponse } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CharactersRes } from './config/interfaces';
import apiService from './config';

export const charactersThunk = createAsyncThunk(
  'interests',
  async ({ name = '' }: { name: string }, { rejectWithValue }) => {
    try {
      const response = await apiService.get<CharactersRes>(
        `v1/public/characters?nameStartsWith=${name}`
      );
      return response;
    } catch (err) {
      const error = err as AxiosResponse;

      return rejectWithValue({
        code: error ? error.status : 500,
        text: error ? error.statusText : '',
      });
    }
  }
);
