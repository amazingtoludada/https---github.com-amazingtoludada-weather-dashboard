import './App.css';
import React from 'react';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Dashboard</h1>
        <Weather />
      </header>
    </div>
  );
}

export default App;
