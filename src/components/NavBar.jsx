import React from "react";

const NavBar = ({pokemonList, currentPokemon, setCurrentPokemon}) => {
  const handleClick = (event) => {
    console.log(currentPokemon)
    console.log(pokemonList.filter((pokemon) => pokemon.name == event.target.innerHTML), event.target.innerHTML)
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

// Tu vas générer un bouton par pokémon dans le composant NavBar.
// Enlève d'abord les boutons "précédent" et "suivant".
// Boucle sur pokemonList directement dans le return du composant à l'aide de map.

// 🧐 Critères de validation
// Le composant NavBar affiche un bouton par pokémon.
// Chaque bouton a une key unique.
// Les boutons sont fonctionnels.

// {pokemonIndex > 0 ? <button onClick={handleClick}>Prev</button> : <button disabled="disabled">Prev</button>}
// {pokemonIndex < pokemonLength - 1 ? <button onClick={handleClick}>Next</button> : <button disabled="disabled">Next</button>}