import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithProviders } from '../test-utils/renderWithProviders';
import Home from './page';

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: () => jest.fn(),
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: () => jest.fn(),
}));

describe('Home', () => {
  it('Should render Home', async () => {
    renderWithProviders(<Home />);

    expect(
      screen.getByText('Seus heróis favoritos em um só lugar!')
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'O Universo Marvel é o universo compartilhado onde ocorrem as histórias na maioria dos títulos de quadrinhos americanos e outras mídias publicadas pela Marvel Entertainment. Super-equipes, como os Vingadores, os X-Men e outros super-heróis Marvel vivem neste universo, incluindo personagens como Homem-Aranha, Capitão América, Homem de Ferro, Thor, Hulk, Doutor Estranho e muitos outros.'
      )
    ).toBeInTheDocument();
  });
});
