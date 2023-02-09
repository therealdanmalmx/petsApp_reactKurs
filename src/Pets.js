import { useEffect, useState } from 'react';
import './App.css';
import PetItems from './PetItems'

function Pets() {
  const [data, setData] = useState([]);

  const removePet = (name) => {
    console.log(name)
    const newList = data.pets.filter((pet) => pet.name !== name);
    setData(newList);
  }
  
  useEffect(() => {
    const petsList = require('./pets.json');
    setData(petsList);
  }, [setData])
    
  console.log('data', data)
  return (
    <div className="App">
      <h1 className="pets-title">Them my pets ya'll</h1>
      <div className="pets-flex">
        {data.pets.map((pet) => (
          <PetItems key={pet.name} pet={pet} removePet={removePet}/>
        ))}
      </div>
    </div>
  );
}

export default Pets;
