'use client';

import React, { useCallback, useMemo, useEffect } from 'react';
import debounce from 'lodash.debounce';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { charactersThunk } from '../../services/characters';
import { setValueSearch } from '../../store/slices/charactersSlice';

import * as Styled from './styles';

const Search = () => {
  const dispatch = useAppDispatch();

  const valueSearch = useAppSelector((state) => state.characters.valueSearch);

  const onSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(charactersThunk({ name: e.target.value }));
    },
    [dispatch]
  );

  const debouncedChange = useMemo(() => debounce(onSearch, 300), [onSearch]);

  const onClear = () => {
    if (valueSearch) {
      dispatch(charactersThunk({ name: '' }));
      dispatch(setValueSearch({ value: '' }));
    }
  };

  useEffect(() => {
    return () => {
      debouncedChange.cancel();
    };
  }, [debouncedChange]);

  return (
    <Styled.Container>
      <Styled.IconSearch size={24} />
      <Styled.Input
        placeholder='Digite parte do nome do seu herói favorito para encontrá-lo'
        onChange={(e) => {
          dispatch(setValueSearch({ value: e.target.value }));
          debouncedChange(e);
        }}
        value={valueSearch}
      />
      <Styled.IconClear size={24} onClick={onClear} />
    </Styled.Container>
  );
};

export default Search;
