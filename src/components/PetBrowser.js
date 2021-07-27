import React from "react";

import Pet from "./Pet";

function PetBrowser({onFindPetsClick, pets, onAdoptPet}) {
  return <div className="ui cards" onClick = {onFindPetsClick}>
    <Pet gender = {pets.gender} name = {pets.name} type = {pets.type} age = {pets.age} weight = {pets.weight}/>
  </div>;
}

export default PetBrowser;
