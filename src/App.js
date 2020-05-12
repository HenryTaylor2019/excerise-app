import React from 'react';
import './App.css';
import List from './Components/List';

import ExerciseContextProvider from './Contexts/ExerciseContext';


function App() {
  return (
    <ExerciseContextProvider>
      <div className="App">
        <List />
      </div>
    </ExerciseContextProvider>
  );
}

export default App;
