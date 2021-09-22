import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Quote from '../../../pages/Quote';
import Home from '../../../pages/Home';
import CalculatorRow from '../../UI/CalculatorRow';
import Calculator from '../../UI/Calculator';
// import Navbar from '../../UI/Navbar';

describe('Quote component', () => {
  test('Quote component renders', () => {
    render(<Quote />);
    expect(screen.getByText(/Mathematics knows no races or geographic boundaries/)).toBeInTheDocument;
  });
});

// // describe('NavBar Component', () => {
// //   test('NavBar component renders', () => {
// //     render(<Navbar display="" />);
// //     expect(screen.getByRole('li'));
// //   });
// // });

describe('Home component', () => {
  test('Home component renders', () => {
    render(<Home />);
    expect(screen.getByText(/Welcome to our page/)).toBeInTheDocument;
  });
});

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
