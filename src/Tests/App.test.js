import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Reducers/Index';
import App from '../Components/App';

test('renders learn react link', () => {
  const { getAllByText } = render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
  );
  const linkElement = getAllByText(/LOGIN/i);
  expect(linkElement.length).toBe(1);
});
