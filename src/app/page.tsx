'use client';

import React, { useEffect } from 'react';

import { useAppDispatch } from '../store/hooks';
import { charactersThunk } from '../services/characters';

import Preview from '../components/Preview';
import List from '../components/List';

import * as Styled from './styles';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(charactersThunk({ name: '' }));
  }, [dispatch]);

  return (
    <Styled.Container>
      <Preview />
      <List />
    </Styled.Container>
  );
};

export default Home;
