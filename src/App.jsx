// App component

import React from "react";
import MemoryGame from "./components/MemoryGame";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <MemoryGame />
    </div>
  );
};

export default App;