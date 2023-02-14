import { useState, useEffect } from "react";
import "../App.css";
import PetItems from "./PetItems";
const petsList = require("../pets.json");

function Pets() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(petsList);
  }, [data]);

  const removePet = (name) => {
    let newList = data.pets.filter((pet) => pet.name !== name);
    console.log({ newList });
    setData(newList);
  };

  console.log("data", data);
  return (
    <div className="App">
      <h1 className="pets-title">Them my pets ya'll</h1>
      <div className="pets-flex">
        {data.pets.length &&
          data.pets.map((pet) => (
            <PetItems key={pet.name} pet={pet} removePet={removePet} />
          ))}
      </div>
    </div>
  );
}

export default Pets;
