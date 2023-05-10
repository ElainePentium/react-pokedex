import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from "./components/PokemonCard"

function App() {

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

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClick = (event) => {
    if(event.target.innerHTML == "Prev") {
      setPokemonIndex(pokemonIndex - 1)
    }
    if(event.target.innerHTML == "Next") {
      setPokemonIndex(pokemonIndex + 1)
    }
  }

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      {pokemonIndex > 0 ? <button onClick={handleClick}>Prev</button> : <button disabled="disabled">Prev</button>}
      {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClick}>Next</button> : <button disabled="disabled">Next</button>}
    </div>
  );
}

export default App
