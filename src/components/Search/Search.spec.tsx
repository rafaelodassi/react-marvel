import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../test-utils/renderWithProviders';
import { CharactersSlice } from '../../store/slices/charactersSlice';
import Search from './Search';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: () => jest.fn(),
}));

describe('Search', () => {
  it('Should render Search', async () => {
    renderWithProviders(<Search />, {
      preloadedState: {
        characters: {
          valueSearch: 'Hulk',
        } as CharactersSlice,
      },
    });

    expect(
      screen.getByPlaceholderText(
        'Digite parte do nome do seu herói favorito para encontrá-lo'
      )
    ).toBeInTheDocument();

    expect(screen.getByDisplayValue('Hulk'));
  });
});
