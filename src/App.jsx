import React from 'react'
import { useState, useEffect } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from "./components/PokemonCard"
import NavBar from './components/NavBar'

function App() {
  useEffect(
    () =>  {
      alert("hello pokemon trainer :)")
    }, 
    []
 );

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/601px-Pokebola-pokeball-png-0.png"
    },
  ];

  const [currentPokemon, setCurrentPokemon] = useState([pokemonList[0]]);

  return (
    <div>
      <PokemonCard pokemon={currentPokemon[0]} />
      <NavBar pokemonList={pokemonList} currentPokemon={currentPokemon[0]} setCurrentPokemon={setCurrentPokemon} />
    </div>
  );
}

export default App
