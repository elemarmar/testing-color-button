import './App.css';
import { useState } from 'react';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

export default function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [disabled, setDisabled] = useState(false);
  const newButtonColor =
    buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
  return (
    <div>
      <button
        onClick={() => setButtonColor(newButtonColor)}
        type="button"
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
        disabled={disabled}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <label htmlFor="disable-button">Disable button</label>
      <input
        id="disable-button"
        type="checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={() => setDisabled(!disabled)}
      />
    </div>
  );
}
