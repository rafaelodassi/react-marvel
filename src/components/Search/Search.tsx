'use client';

import React, { useCallback, useMemo, useEffect } from 'react';
import debounce from 'lodash.debounce';

import { useAppDispatch } from '../../store/hooks';
import { charactersThunk } from '../../services/characters';

import * as Styled from './SearchStyles';

const Search = () => {
  const dispatch = useAppDispatch();

  const onSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(charactersThunk({ name: e.target.value }));
    },
    [dispatch]
  );

  const debouncedChange = useMemo(() => debounce(onSearch, 300), [onSearch]);

  useEffect(() => {
    return () => {
      debouncedChange.cancel();
    };
  }, [debouncedChange]);

  return (
    <Styled.Container>
      <Styled.Input placeholder='aas' onChange={debouncedChange} />
    </Styled.Container>
  );
};

export default Search;
