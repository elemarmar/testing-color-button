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
  userEvent.click(btnElement);

  // using fireEvent
  // fireEvent.click(btnElement);
  expect(btnElement).toHaveTextContent(/change to red/i);
  expect(btnElement).toHaveStyle({ backgroundColor: 'blue' });
});
test('button starts out enabled and checkbox unchecked', () => {
  render(<App />);

  // Button is enabled
  const btnElement = screen.getByRole('button', { name: /change to blue/i });
  expect(btnElement).toBeEnabled();

  // Checkbox is unchecked
  const checkboxElement = screen.getByRole('checkbox', {
    label: /disable button/i,
  });
  expect(checkboxElement).not.toBeChecked();
});
test('button gets disabled on checkbox click', () => {
  render(<App />);

  const btnElement = screen.getByRole('button', { name: /change to blue/i });
  const checkboxElement = screen.getByRole('checkbox', {
    label: /disable button/i,
  });

  // using userEvent
  userEvent.click(checkboxElement);
  expect(checkboxElement).toBeChecked();
  expect(btnElement).toBeDisabled();

  // Re enable the button
  userEvent.click(checkboxElement);
  expect(checkboxElement).not.toBeChecked();
  expect(btnElement).toBeEnabled();
});
