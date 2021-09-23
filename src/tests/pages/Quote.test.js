import React from 'react';
import { render, screen } from '@testing-library/react';
import Quote from '../../pages/Quote';

describe('Quote component', () => {
  test('Quote component renders', () => {
    render(<Quote />);
    expect(screen.getByText(/Mathematics knows no races or geographic boundaries/)).toBeInTheDocument();
  });
});
