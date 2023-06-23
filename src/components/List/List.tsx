'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Masonry from 'react-masonry-css';

import { useAppSelector } from '../../store/hooks';

import * as Styled from './styles';

const List = () => {
  const router = useRouter();

  const fetchStatus = useAppSelector((state) => state.characters.fetchStatus);
  const errorData = useAppSelector((state) => state.characters.errorData);
  const dataCharacters = useAppSelector(
    (state) => state.characters.dataCharacters
  );

  const openCharacter = (id: string) => {
    router.push(`/character/${id}`);
  };

  return (
    <Styled.Container>
      <Masonry
        breakpointCols={{
          default: 6,
          1400: 5,
          1200: 4,
          1000: 3,
          750: 2,
          600: 1,
        }}
        className='masonry-grid'
        columnClassName='masonry-grid-column'
      >
        {dataCharacters?.results.map((r) => (
          <Styled.Card key={r.id} onClick={() => openCharacter(r.id)}>
            <Styled.Thumbnail
              thumbnail={`${r.thumbnail.path}.${r.thumbnail.extension}`}
            />
            <Styled.Name>{r.name}</Styled.Name>
          </Styled.Card>
        ))}
      </Masonry>
    </Styled.Container>
  );
};

export default List;
