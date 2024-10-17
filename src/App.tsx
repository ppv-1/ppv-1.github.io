import React from 'react';
import './App.css';
import Roulette from './Roulette';

function App() {
  return (
    <div className="App h-screen bg-gray-900 text-white">
      <header className="App-header h-16 flex items-center justify-start bg-gray-800 shadow-md">
        <Roulette />
      </header>
      
    </div>
  );
}

export default App;
