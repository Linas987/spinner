import React, { useEffect } from 'react';
import './App.css';
import Spinner from './Components/Spinner/Spinner';
import { telegram } from './Telegram/config';



function App() {
  useEffect(() => {
    telegram.ready();
  });
  return (
    <div className="App">
      <header className="App-header">
        <Spinner></Spinner>
      </header>
    </div>
  );
}

export default App;
