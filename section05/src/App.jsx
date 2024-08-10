import './App.css';
import {useState} from 'react';
import Bulb from './components/Bulb';
import Counter from './components/Counter';

// Parent component & Root Component
function App() {

  return (
    <>
    <div>
    <Bulb />
    </div>
    <Counter />
    </>
  );
}

export default App;