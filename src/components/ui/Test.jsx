import React, { useState } from 'react';
import './App.css'; // Asegúrate de tener el archivo App.css

function App() {
  const [bodyOverflow, setBodyOverflow] = useState('auto'); // Estado para el estilo del overflow

  const handleButtonClick = () => {
    // Cambia el estado del overflow al contrario del estado actual
    setBodyOverflow((prevOverflow) => (prevOverflow === 'hidden' ? 'auto' : 'hidden'));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Overflow Toggle</h1>
        <button onClick={handleButtonClick}>Toggle Overflow</button>
      </header>
    </div>
  );
}

export default App;
