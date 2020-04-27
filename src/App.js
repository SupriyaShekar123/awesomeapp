import React from 'react';

import './App.css';
import Title from "./components/Title";
import Pokemon from "./components/Pokemon"

function App() {
  return (
    <div className="App">
    <main>
      <Title content="Some Simple Text"/>
      <Pokemon />
    </main>

<header className="App-header">
  
  <p>
    Edit <code>src/App.js</code> and save tp reload.
  </p>
  <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
</header>

    </div>
  )
}

export default App;
