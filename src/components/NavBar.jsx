import React from "react";

const NavBar = ({pokemonList, currentPokemon, setCurrentPokemon}) => {
  const handleClick = (event) => {
    setCurrentPokemon(pokemonList.filter((pokemon) => pokemon.name == event.target.innerHTML))
  }

  return (
    <div>
      {pokemonList.map((pokemon) => (
        <button onClick={handleClick} key={pokemon.name}>{pokemon.name}</button>
      ))}
    </div>
  )
}

export default NavBar;
