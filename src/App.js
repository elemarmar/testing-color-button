import './App.css';
import { useState } from 'react';

export default function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  return (
    <div>
      <button
        onClick={() => setButtonColor(newButtonColor)}
        type="button"
        style={{ backgroundColor: buttonColor }}
      >
        Change to {newButtonColor}
      </button>
    </div>
  );
}
