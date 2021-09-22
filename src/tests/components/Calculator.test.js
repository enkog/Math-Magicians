import React from 'react';
import { render, screen } from '@testing-library/react';
import Calculator from '../../components/UI/Calculator'

describe('Calculator component', () => {
    test('Calculator component renders', () => {
      render(<Calculator />);
      expect(screen.getByText(/Let's do some math!/)).toBeInTheDocument;
    });
  
    test('Calculator component renders', () => {
      render(<Calculator />);
      expect(screen.getByRole('table')).toBeInTheDocument;
    });
});