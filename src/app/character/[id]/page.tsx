'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  charactersByIdThunk,
  comicsByCharactersThunk,
} from '../../../services/characters';
import { clearCharacterSelected } from '../../../store/slices/charactersSlice';
import Logo from '../../../../public/img/logo.png';
import List from '../../../components/List';
import Skeleton from '../../../components/Skeleton';

import * as Styled from './styles';

const Character = ({ params }: { params: { id: string } }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const fetchStatusCharacters = useAppSelector(
    (state) => state.characters.fetchStatusCharacters
  );

  const characterSelected = useAppSelector(
    (state) => state.characters.characterSelected
  );

  const errorDataComics = useAppSelector(
    (state) => state.characters.errorDataComics
  );

  const fetchStatusComics = useAppSelector(
    (state) => state.characters.fetchStatusComics
  );

  const comics = useAppSelector((state) => state.characters.comics);

  const thumbnail = `${characterSelected?.thumbnail.path}.${characterSelected?.thumbnail.extension}`;

  useEffect(() => {
    dispatch(charactersByIdThunk({ id: params.id }));
    dispatch(comicsByCharactersThunk({ id: params.id }));
  }, [dispatch, params.id]);

  const back = () => {
    dispatch(clearCharacterSelected());
    router.back();
  };

  const containError = () => {
    return (
      (comics && comics.results && !comics.results.length) || errorDataComics
    );
  };

  return (
    <Styled.Container>
      <Styled.ContainerInfo thumbnail={thumbnail}>
        <Styled.Logo src={Logo} width={100} alt='Marvel' />
        {fetchStatusCharacters === 'loading' ? (
          <Skeleton width={'300px'} heigth={'20px'} />
        ) : (
          <Styled.Name>{characterSelected?.name}</Styled.Name>
        )}
        {fetchStatusCharacters === 'loading' ? (
          <Skeleton heigth={'20px'} />
        ) : (
          characterSelected?.description && (
            <Styled.Description>
              {characterSelected?.description}
            </Styled.Description>
          )
        )}
        <Styled.ContainerButton>
          <Styled.ButtonBack onClick={back}>
            <Styled.IconBack size={24} />
            Voltar
          </Styled.ButtonBack>
        </Styled.ContainerButton>
      </Styled.ContainerInfo>
      <Styled.TitleComics>
        {fetchStatusCharacters === 'loading' ? (
          <Skeleton width={'300px'} heigth={'20px'} />
        ) : (
          <>
            <Styled.IconComics size={24} />
            Quadrinhos de {characterSelected?.name}
          </>
        )}
      </Styled.TitleComics>
      {containError() ? (
        <Styled.ContainerError>
          Que pena! Não foi possível encontrar nenhum quadrinho :(
        </Styled.ContainerError>
      ) : (
        <List data={comics} fetchStatus={fetchStatusComics} type='comics' />
      )}
    </Styled.Container>
  );
};

export default Character;
