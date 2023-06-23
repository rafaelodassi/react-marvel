import { AxiosResponse } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CharactersRes } from '../store/types/dataCharacters';
import apiService from './config';

export const charactersThunk = createAsyncThunk(
  'characters',
  async ({ name = '' }: { name: string }, { rejectWithValue }) => {
    try {
      const response = await apiService.get<CharactersRes['data']>(
        `v1/public/characters${
          name ? `?limit=100&nameStartsWith=${name}` : '?limit=100&'
        }`
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

export const charactersByIdThunk = createAsyncThunk(
  'charactersById',
  async ({ id = '' }: { id: string }, { rejectWithValue }) => {
    try {
      const response = await apiService.get<CharactersRes['data']>(
        `v1/public/characters/${id}`
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
