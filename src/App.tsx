import React from 'react';
import Canvas from './components/Canvas';
import ClearButton from './components/ClearButton';
import SizeInput from './components/SizeInput';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Canvas></Canvas>
      <ClearButton></ClearButton>
      <SizeInput></SizeInput>
    </div>
  );
};

export default App;
