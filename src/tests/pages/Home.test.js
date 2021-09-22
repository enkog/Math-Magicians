import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../pages/Home'

describe('Home component', () => {
    test('Home component renders', () => {
      render(<Home />);
      expect(screen.getByText(/Welcome to our page/)).toBeInTheDocument;
    });
  });