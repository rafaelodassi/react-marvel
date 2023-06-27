'use client';

import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { charactersThunk } from '../services/characters';
import Logo from '../../public/img/logo.png';
import Search from '../components/Search';
import List from '../components/List';

import * as Styled from './styles';

const Home = () => {
  const dispatch = useAppDispatch();

  const errorDataCharacters = useAppSelector(
    (state) => state.characters.errorDataCharacters
  );

  const fetchStatusCharacters = useAppSelector(
    (state) => state.characters.fetchStatusCharacters
  );

  const characters = useAppSelector((state) => state.characters.characters);

  const valueSearch = useAppSelector((state) => state.characters.valueSearch);

  useEffect(() => {
    dispatch(charactersThunk({ name: valueSearch }));
  }, [dispatch]);

  const containError = () => {
    return (
      (characters && characters.results && !characters.results.length) ||
      errorDataCharacters
    );
  };

  return (
    <Styled.Container>
      <Styled.ContainerInfo>
        <Styled.Logo src={Logo} width={100} alt='Marvel' />
        <Styled.Name>Seus heróis favoritos em um só lugar!</Styled.Name>
        <Styled.Description>
          O Universo Marvel é o universo compartilhado onde ocorrem as histórias
          na maioria dos títulos de quadrinhos americanos e outras mídias
          publicadas pela Marvel Entertainment. Super-equipes, como os
          Vingadores, os X-Men e outros super-heróis Marvel vivem neste
          universo, incluindo personagens como Homem-Aranha, Capitão América,
          Homem de Ferro, Thor, Hulk, Doutor Estranho e muitos outros.
        </Styled.Description>
        <Search />
      </Styled.ContainerInfo>
      {containError() ? (
        <Styled.ContainerError>
          Que pena! Não foi possível encontrar nenhum herói :(
        </Styled.ContainerError>
      ) : (
        <List
          data={characters}
          fetchStatus={fetchStatusCharacters}
          type='characters'
        />
      )}
    </Styled.Container>
  );
};

export default Home;
