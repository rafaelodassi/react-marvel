import { AxiosResponse } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CharactersRes, ComicsRes } from '../store/types/characters';
import apiService from './config';

export const charactersThunk = createAsyncThunk(
  'characters',
  async ({ name = '' }: { name: string }, { rejectWithValue }) => {
    try {
      const response = await apiService.get<CharactersRes['data']>(
        `v1/public/characters${
          name ? `?nameStartsWith=${name}&limit=100` : '?limit=100'
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

export const comicsByCharactersThunk = createAsyncThunk(
  'comicsByCharacters',
  async ({ id = '' }: { id: string }, { rejectWithValue }) => {
    try {
      const response = await apiService.get<ComicsRes['data']>(
        `v1/public/characters/${id}/comics?limit=100`
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
