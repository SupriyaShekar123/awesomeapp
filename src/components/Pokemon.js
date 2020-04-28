import React from "react";

export default function Pokemon(props){
    return(
        <div className="Pokemon">
            
            <div>
            <h2>Pokemon name: {props.name}</h2></div>
      <div><p>Weight: {props.weight} kg</p></div>
      <div> <p>Awesome: { props.awesome ? "Very" : "nope,not really"}</p></div>
      <div> <p>Terrifying: {props.terrifying ? "Very" : "nah, loveable"}</p></div>
      <div> <p>Abilities: {props.abilities}
    </p></div>
    </div>
    
        
    )
}