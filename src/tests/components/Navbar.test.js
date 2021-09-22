import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../../components/UI/Navbar';

it('should render an empty message when no books', () => {
    const component = renderer.create(
      <Router>
        <Navbar />
      </Router>
    ).toJSON();
    expect(component).toMatchSnapshot();
});