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
  return abilitiesPokemon.abilities
})



const listingAbilities = abilitiesOf.map((pokemonList) =>{
    const abilities = pokemonList.map((ability)=>{
       return <li>{ability}</li>
    })
      return <ul>{ abilities }</ul>
})




//const lstAbilitInd=listingAbilities.join('\r\n')

//console.log("value of is " + listingAbilities)

//const joinPokemon = listingAbilities.join('<li>')
// console.log(joinPokemon)
// const t= 'testing'

function App() {
  return (
    <div className="App-div">
    <main>
      <Title content="Some Simple Text" />

      

      
      <Pokemon name={nameOf[0]}
               weight = {weightOf[0]}
               awesome = {awesomeOf[0]}
               terrifying ={terrifyingOf[0]}
               abilities = {listingAbilities[0]}
      />
      
      <Pokemon name={nameOf[1]}
               weight = {weightOf[1]}
               awesome = {awesomeOf[1]}
               terrifying ={terrifyingOf[1]}
               abilities ={listingAbilities[1]}        
      />

<Pokemon name={nameOf[2]}
               weight = {weightOf[2]}
               awesome = {awesomeOf[2]}
               terrifying ={terrifyingOf[2]}
               abilities ={listingAbilities[2]}        
      />
      <Pokemon name={nameOf[3]}
               weight = {weightOf[3]}
               awesome = {awesomeOf[3]}
               terrifying ={terrifyingOf[3]}
               abilities ={listingAbilities[3]}        
      />
      
      
    </main>


  
 


    </div>
  )
}

export default App;
