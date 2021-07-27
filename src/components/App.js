import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function handlePetClick(){
    fetch(`http://localhost:3001/pets/pets?type=${filters}`)
    .then(response => response.json())
    .then(data => setPets(data))

  }

  // const petsList = pets.map((item) => {
  //   <Pet key = {item.id} type = {item.type} gender = {item.gender} age = {item.age} weight = {item.weight} name = {item.name} isAdopted = {item.isAdopted}/>
  // })

  function editFilter(event){
    setFilters(event.target.value)
  }





  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType = {editFilter}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser onFindPetsClick = {handlePetClick}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
