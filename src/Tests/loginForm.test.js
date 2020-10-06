import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Reducers/Index';
import LoginForm from '../Containers/LoginForm';

test('renders learn react link', () => {
  render(
    <Router>
      <Provider store={store}>
        <LoginForm />
      </Provider>
    </Router>,
  );
  expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
  expect(screen.getByText('LOGIN')).toBeInTheDocument();
});
