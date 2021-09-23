import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../../components/UI/Calculator';

describe('Calculator component', () => {
  test('Calculator component renders', () => {
    const component = render(<Calculator />);
    expect(component).toMatchSnapshot();
  });

  test('Calculator renders correctly', () => {
    render(<Calculator />);
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  test('Addition is carried out correctly', () => {
    const { getByText } = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(screen.getAllByText('4')[0]).toBeInTheDocument();
  });

  test('Subtraction is carried out correctly', () => {
    const { getByText } = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(screen.getAllByText('0')[0]).toBeInTheDocument();
  });

  test('Multiplication is carried out correctly', () => {
    const { getByText } = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('x'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(screen.getAllByText('6')[0]).toBeInTheDocument();
  });

  test('Division is carried out correctly', () => {
    const { getByText } = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('÷'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(screen.getAllByText('1')[0]).toBeInTheDocument();
  });
});
