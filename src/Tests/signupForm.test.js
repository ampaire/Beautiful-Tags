import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Reducers/Index';
import SignupFrom from '../Containers/SignUpForm';

test('renders learn react link', () => {
  render(
    <Router>
      <Provider store={store}>
        <SignupFrom />
      </Provider>
    </Router>,
  );
  expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('password confirmation')).toBeInTheDocument();
  expect(screen.getByText(/profile/i)).toBeInTheDocument();
});
