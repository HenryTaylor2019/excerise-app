import React from 'react';
import './App.css';
import List from './Components/List';

import ExerciseContextProvider from './Contexts/ExerciseContext';


function App() {
  return (
    <ExerciseContextProvider>
      <div className="App">
        <div className={"container"}>
          <List />
        </div>
      </div>
    </ExerciseContextProvider>
  );
}

export default App;
