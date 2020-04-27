import React from 'react';

import './App.css';
import Title from "./components/Title";
import Pokemon from "./components/Pokemon"


const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"]
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"]
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"]
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"]
  }
];

const  nameOf = all_pokemon.map((namePokemon)=>{
  return namePokemon.name
})
const  weightOf = all_pokemon.map((weightPokemon)=>{
  return weightPokemon.weight
})

const awesomeOf = all_pokemon.map((awsomePokemon)=>{
  return awsomePokemon.awesome
})
const terrifyingOf = all_pokemon.map((terrifyingPokemon)=>{
  return terrifyingPokemon.weight
})
const abilitiesOf = all_pokemon.map((abilitiesPokemon)=>{
  return (<li>{abilitiesPokemon.abilities}</li>)
})



function App() {
  return (
    <div className="App">
    <main>
      <Title content="Some Simple Text" />

      

      
      <Pokemon name={nameOf[0]}
               weight = {weightOf[0]}
               awesome = {awesomeOf[0]}
               terrifying ={terrifyingOf[0]}
               abilities ={abilitiesOf[0]}
      
               
      />
      
      
    </main>

<header className="App-header">
  
  <p>
    Edit <code>src/App.js</code> and save tp reload.
  </p>
  <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
</header>

    </div>
  )
}

export default App;
