import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  const btnElement = screen.getByRole('button', { name: /change to blue/i });
  expect(btnElement).toHaveStyle({ backgroundColor: 'red' });
});
test('button turns blue when clicked', () => {
  render(<App />);
  const btnElement = screen.getByRole('button', { name: /change to blue/i });

  // using userEvent
  // userEvent.click(btnElement);

  // using fireEvent
  fireEvent.click(btnElement);
  expect(btnElement).toHaveTextContent(/change to red/i);
  expect(btnElement).toHaveStyle({ backgroundColor: 'blue' });
});
