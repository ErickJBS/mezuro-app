import React from 'react';

import Switch from './components/switch/Switch';

import './App.scss';

function App() {

  const changed = (status) => {
    console.log(status);
  }

  return (
    <div className="App">
      <p>Mezuro App</p>
      <Switch onChange={changed} leftDescription="g" rightDescription="oz"></Switch>
    </div>
  );
}

export default App;
