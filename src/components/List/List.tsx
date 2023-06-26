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

import * as Styled from './styles';

interface ListProps {
  list: (CharactersRes['data'] | ComicsRes['data']) | null;
  type: 'characters' | 'comics';
}

const List = ({ list, type }: ListProps) => {
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
      {list?.results && (
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
          {list.results.map((l) => (
            <Styled.Card
              key={l.id}
              onClick={() => openCharacter(l.id)}
              type={type}
            >
              <Styled.Thumbnail
                thumbnail={`${l.thumbnail.path}.${l.thumbnail.extension}`}
              />
              <Styled.Name>{getName(l)}</Styled.Name>
            </Styled.Card>
          ))}
        </Masonry>
      )}
    </Styled.Container>
  );
};

export default List;
