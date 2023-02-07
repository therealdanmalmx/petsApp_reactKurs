const petsList = require('./pets.json');

import './App.css';
import { useState } from 'react'
import Pets from './Pets'

function App() {
  const [  count, setCount ] = useState(0);
  return (
    <div className="App">
     <h1>My name is Daniel</h1>
     <h2>{count}</h2>
     <button onClick={() => setCount((count) => count+1)}>Press Me</button>
     <button onClick={() => setCount(0)}>Reset</button>
     <Pets />
    </div>
  );
}

export default App;
