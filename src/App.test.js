import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App, { replaceCamelWithSpaces } from './App';

test('button has correct initial color', () => {
  render(<App />);
  const btnElement = screen.getByRole('button', {
    name: /change to midnight blue/i,
  });
  expect(btnElement).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});
test('button turns midnight blue when clicked', () => {
  render(<App />);
  const btnElement = screen.getByRole('button', {
    name: /change to midnight blue/i,
  });

  // using userEvent
  userEvent.click(btnElement);

  // using fireEvent
  // fireEvent.click(btnElement);
  expect(btnElement).toHaveTextContent(/change to medium violet red/i);
  expect(btnElement).toHaveStyle({ backgroundColor: 'midnight blue' });
});
test('button starts out enabled and checkbox unchecked', () => {
  render(<App />);

  // Button is enabled
  const btnElement = screen.getByRole('button', {
    name: /change to midnight blue/i,
  });
  expect(btnElement).toBeEnabled();

  // Checkbox is unchecked
  const checkboxElement = screen.getByRole('checkbox', {
    label: /disable button/i,
  });
  expect(checkboxElement).not.toBeChecked();
});
test('button gets disabled on checkbox click', () => {
  render(<App />);

  const btnElement = screen.getByRole('button', {
    name: /change to midnight blue/i,
  });
  const checkboxElement = screen.getByRole('checkbox', {
    name: /disable button/i,
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
test('Disabled button has gray background and reverts to medium violet red', () => {
  render(<App />);

  const btnElement = screen.getByRole('button', {
    name: /change to midnight blue/i,
  });
  const checkboxElement = screen.getByRole('checkbox', {
    name: /disable button/i,
  });

  // disable button
  userEvent.click(checkboxElement);
  expect(btnElement).toHaveStyle({ backgroundColor: 'gray' });

  // re-enable button
  userEvent.click(checkboxElement);
  expect(btnElement).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});
test('Clicked disabled button has gray background and reverts to midnight blue', () => {
  render(<App />);

  const btnElement = screen.getByRole('button', {
    name: /change to midnight blue/i,
  });
  const checkboxElement = screen.getByRole('checkbox', {
    name: /disable button/i,
  });

  // change button to blue
  userEvent.click(btnElement);

  // disable button
  userEvent.click(checkboxElement);
  expect(btnElement).toHaveStyle({ backgroundColor: 'gray' });

  // re-enable button
  userEvent.click(checkboxElement);
  expect(btnElement).toHaveStyle({ backgroundColor: 'midnight blue' });
});
describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
