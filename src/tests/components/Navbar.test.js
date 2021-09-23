import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../../components/UI/Navbar';
import App from '../../App';

it('should render the navbar', () => {
  const component = render(<Router><Navbar /></Router>);
  expect(component).toMatchSnapshot();
});

describe('Click events', () => {
  test('expect home to be default page when the app starts', () => {
    render(<Router><App /></Router>);
    expect(screen.queryByText(/Welcome/)).toBeInTheDocument();
  });

  test('that user to redirected to the Quote page on clicking Quote', () => {
    render(<Router><App /></Router>);
    expect(screen.queryByText(/Mathematics is not about numbers/)).toBeNull();
    userEvent.click(screen.getByText('Quote'));
    expect(screen.queryByText(/Mathematics is not about numbers/)).toBeInTheDocument();
  });

  test('that user to redirected to the Calculator page on clicking Calculator', () => {
    render(<Router><App /></Router>);
    expect(screen.queryByText('Lets do Some Math:')).toBeNull();
    userEvent.click(screen.getByText('Calculator'));
    expect(screen.queryByText("Let's do some math!")).toBeInTheDocument();
  });
});
