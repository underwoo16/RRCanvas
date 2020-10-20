import React from 'react';
import Canvas from './components/Canvas';

import './App.css';
import ClearButton from './components/ClearButton';

const App = () => {
  return (
    <div className="App">
      <Canvas></Canvas>
      <ClearButton></ClearButton>
    </div>
  );
};

export default App;
