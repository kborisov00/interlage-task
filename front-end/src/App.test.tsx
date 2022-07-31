import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import App from './App';
import { store } from 'store/store';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText(/Hello, World!/i)).toBeInTheDocument();
});
