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

import * as Styled from './styles';

interface ListProps {
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
              <Styled.ContainerSkeleton key={d}>
                <Styled.Skeleton
                  backgroundColor='#262626'
                  foregroundColor='#303030'
                  speed={2}
                  width={'100%'}
                  height={'100%'}
                  viewBox='0 0 100% 100%'
                >
                  <rect
                    x='0'
                    y='0'
                    rx='12'
                    ry='12'
                    width='100%'
                    height='100%'
                  />
                </Styled.Skeleton>
              </Styled.ContainerSkeleton>
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
