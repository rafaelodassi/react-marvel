import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../test-utils/renderWithProviders';
import Skeleton from './Skeleton';

describe('Skeleton', () => {
  it('Should render Skeleton', async () => {
    renderWithProviders(<Skeleton />);
    expect(screen.getByTestId('container-skeleton')).toBeInTheDocument();
  });
});
