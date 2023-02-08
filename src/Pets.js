import { useEffect, useState } from 'react';
import './App.css';
import PetItems from './PetItems'

function Pets() {
  const [data, setData] = useState(undefined);
  
  useEffect(() => {
    const petsList = require('./pets.json');
    setData(petsList);
  }, [])
    
  console.log({data})
  return (
    <div className="App">
      <h1 className="pets-title">Them my pets ya'll</h1>
      <div className="pets-flex">
        {data.pets.map((pet) => (
          <PetItems pet={pet} />
        ))}
      </div>
    </div>
  );
}

export default Pets;
