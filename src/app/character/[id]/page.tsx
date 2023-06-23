'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { charactersByIdThunk } from '../../../services/characters';
import { clearCharacterSelected } from '../../../store/slices/charactersSlice';
import Logo from '../../../../public/img/logo.png';

import * as Styled from './styles';

const Character = ({ params }: { params: { id: string } }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const characterSelected = useAppSelector(
    (state) => state.characters.characterSelected
  );

  const thumbnail = `${characterSelected?.thumbnail.path}.${characterSelected?.thumbnail.extension}`;

  useEffect(() => {
    dispatch(charactersByIdThunk({ id: params.id }));
  }, [dispatch, params.id]);

  const back = () => {
    dispatch(clearCharacterSelected());
    router.back();
  };

  return (
    <Styled.Container>
      <Styled.ContainerInfo thumbnail={thumbnail}>
        <Styled.Logo src={Logo} width={100} alt='Marvel' />
        <Styled.Name>{characterSelected?.name}</Styled.Name>
        {characterSelected?.description && (
          <Styled.Description>
            {characterSelected?.description}
          </Styled.Description>
        )}
        <Styled.ContainerButton>
          <Styled.ButtonBack onClick={back}>
            <Styled.IconBack size={24} />
            Voltar
          </Styled.ButtonBack>
        </Styled.ContainerButton>
      </Styled.ContainerInfo>
    </Styled.Container>
  );
};

export default Character;
