import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../../components/UI/Calculator';

describe('Calculator component', () => {
  test('Calculator component renders', () => {
    render(<Calculator />);
    expect(screen.getByText(/Let's do some math!/)).toBeInTheDocument();
  });

  test('Calculator component renders', () => {
    render(<Calculator />);
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  test('Calculator adding renders', () => {
    const { getByText } = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(screen.getAllByText('4')[0]).toBeInTheDocument();
  });

  test('Calculator subtracting renders', () => {
    const { getByText } = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(screen.getAllByText('0')[0]).toBeInTheDocument();
  });

  test('Calculator multiply renders', () => {
    const { getByText } = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('x'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(screen.getAllByText('6')[0]).toBeInTheDocument();
  });

  test('Calculator division renders', () => {
    const { getByText } = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('÷'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(screen.getAllByText('1')[0]).toBeInTheDocument();
  });
});
