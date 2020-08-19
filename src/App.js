import React from 'react';

import Switch from './components/switch/Switch';
import Dropdown from './components/dropdown/Dropdown';

import './App.scss';

function App() {

  const changed = (status) => {
    console.log(status);
  }

  const onOptionSelected = (selection) => {
    console.log(selection);
  }

  const options = [
    { label: 'Sugar', value: 0.1 },
    { label: 'Flour', value: 0.2 },
    { label: 'Rice', value: 0.3 }
  ];

  return (
    <div className="App">
      <p>Mezuro App</p>
      <Switch onChange={changed} leftDescription="g" rightDescription="oz"></Switch>
      <Dropdown options={options} onSelectionChanged={onOptionSelected}></Dropdown>
    </div>
  );
}

export default App;
