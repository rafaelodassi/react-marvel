import { AxiosResponse } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CharactersRes } from '../store/types/dataCharacters';
import apiService from './config';

export const charactersThunk = createAsyncThunk(
  'characters',
  async ({ name = '' }: { name: string }, { rejectWithValue }) => {
    try {
      const response = await apiService.get<CharactersRes['data']>(
        `v1/public/characters?nameStartsWith=${name}`
      );
      return response.data;
    } catch (err) {
      const error = err as AxiosResponse;

      return rejectWithValue({
        code: error ? error.status : 500,
        text: error ? error.statusText : '',
      });
    }
  }
);
