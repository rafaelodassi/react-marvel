'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Masonry from 'react-masonry-css';

import {
  CharactersRes,
  ComicsRes,
  Character,
  Comics,
} from '../../store/types/characters';
import { FetchStatus } from '../../store/types/fetchStatus';
import Skeleton from '../../components/Skeleton';

import * as Styled from './styles';

export interface ListProps {
  data: (CharactersRes['data'] | ComicsRes['data']) | null;
  fetchStatus: FetchStatus;
  type: 'characters' | 'comics';
}

const List = ({ data, fetchStatus, type }: ListProps) => {
  const router = useRouter();

  const openCharacter = (id: number) => {
    if (type === 'characters') {
      router.push(`/character/${id}`);
    }
  };

  const getName = (l: Character | Comics) => {
    if (type === 'characters') {
      return (l as Character).name;
    }

    return (l as Comics).title;
  };

  return (
    <Styled.Container>
      <Masonry
        breakpointCols={{
          default: 7,
          1400: 5,
          1200: 4,
          1000: 3,
          750: 2,
          600: 1,
        }}
        className='masonry-grid'
        columnClassName='masonry-grid-column'
      >
        {fetchStatus === 'loading'
          ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => (
              <Skeleton key={d} heigth={'230px'} />
            ))
          : data?.results.map((d) => (
              <Styled.Card
                key={d.id}
                onClick={() => openCharacter(d.id)}
                type={type}
              >
                <Styled.Thumbnail
                  thumbnail={`${d.thumbnail.path}.${d.thumbnail.extension}`}
                />
                <Styled.Name>{getName(d)}</Styled.Name>
              </Styled.Card>
            ))}
      </Masonry>
    </Styled.Container>
  );
};

export default List;
