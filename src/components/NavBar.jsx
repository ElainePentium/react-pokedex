import React from "react";

const NavBar = ({pokemonLength, pokemonIndex, setPokemonIndex}) => {
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
            {pokemonIndex > 0 ? <button onClick={handleClick}>Prev</button> : <button disabled="disabled">Prev</button>}
            {pokemonIndex < pokemonLength - 1 ? <button onClick={handleClick}>Next</button> : <button disabled="disabled">Next</button>}
      </div>
    )
}

export default NavBar;
