'use client';

import React from 'react';

import Logo from '../../../public/img/logo.png';
import Search from '../Search';

import * as Styled from './styles';

const Preview = () => {
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
    </Styled.Container>
  );
};

export default Preview;
