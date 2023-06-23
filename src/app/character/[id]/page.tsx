'use client';

import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { charactersByIdThunk } from '../../../services/characters';

import * as Styled from './styles';

const Character = ({ params }: { params: { id: string } }) => {
  const dispatch = useAppDispatch();

  const characterSelected = useAppSelector(
    (state) => state.characters.characterSelected
  );

  console.log(characterSelected);

  useEffect(() => {
    dispatch(charactersByIdThunk({ id: params.id }));
  }, [dispatch, params.id]);

  return (
    <Styled.Container>
      <Styled.Info>
        <Styled.Banner>
          <Styled.Img />
        </Styled.Banner>
      </Styled.Info>
      <Styled.Tab>aa</Styled.Tab>
      <Styled.Details>aa</Styled.Details>
    </Styled.Container>
  );
};

export default Character;
