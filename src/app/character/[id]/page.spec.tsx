import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../../test-utils/renderWithProviders';
import { Character as CharacterInterface } from '../../../store/types/characters';
import { CharactersSlice } from '../../../store/slices/charactersSlice';
import Character from './page';

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: () => jest.fn(),
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: () => jest.fn(),
}));

describe('Character', () => {
  it('Should render Character', async () => {
    renderWithProviders(<Character params={{ id: '1' }} />, {
      preloadedState: {
        characters: {
          fetchStatusCharacters: 'succeeded',
          characterSelected: {
            name: 'Hulk',
            description: 'Hulk description',
            thumbnail: { path: '', extension: '' },
          } as CharacterInterface,
        } as CharactersSlice,
      },
    });

    expect(screen.getByText('Hulk')).toBeInTheDocument();
    expect(screen.getByText('Hulk description')).toBeInTheDocument();
    expect(screen.getByText('Quadrinhos de Hulk')).toBeInTheDocument();
  });
});
