import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../test-utils/renderWithProviders';
import List, { ListProps } from './List';

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: () => jest.fn(),
}));

describe('List', () => {
  it('Should render List', async () => {
    const mockParams = {
      data: {
        results: [
          {
            id: 1,
            thumbnail: {
              path: '',
              extension: '',
            },
            name: 'Hulk',
          },
        ],
      },
      fetchStatus: 'succeeded',
      type: 'characters',
    } as ListProps;

    renderWithProviders(<List {...mockParams} />);

    expect(screen.getByText('Hulk')).toBeInTheDocument();
  });
});
