import React from "react";

const NavBar = ({pokemonList, currentPokemon, setCurrentPokemon}) => {
  const handleClick = (pokemonName) => {
    setCurrentPokemon(pokemonList.filter((pokemon) => pokemon.name == pokemonName))
  }

  if(currentPokemon.name == 'pikachu') {
    alert("pika pikachu !!!")
  }

  return (
    <div>
      {pokemonList.map((pokemon) => (
        <button onClick={() => handleClick(pokemon.name)} key={pokemon.name}>{pokemon.name}</button>
      ))}
    </div>
  )
}

export default NavBar;
