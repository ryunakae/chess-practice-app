// import React from 'react';
import './App.css';
import Board from 'component/Board';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>CHESS</p>
      </header>
      <main>
        <Board />
      </main>
    </div>
  );
};

export default App;
