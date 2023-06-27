'use client';

import React from 'react';

import * as Styled from './styles';

interface SkeletonProps {
  width?: string;
  heigth?: string;
}

const Skeleton = ({ width, heigth }: SkeletonProps) => {
  return (
    <Styled.Container
      width={width}
      heigth={heigth}
      data-testid='container-skeleton'
    >
      <Styled.Skeleton
        backgroundColor='#262626'
        foregroundColor='#303030'
        speed={2}
        width={'100%'}
        height={'100%'}
      >
        <rect x='0' y='0' rx='12' ry='12' width='100%' height='100%' />
      </Styled.Skeleton>
    </Styled.Container>
  );
};

export default Skeleton;
