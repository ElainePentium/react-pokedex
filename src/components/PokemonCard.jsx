import PropTypes from "prop-types";

function PokemonCard({pokemon}) {
    // console.log("POKEMON:", pokemon)
    return (
        <figure>
            {pokemon.imgSrc == undefined ? <p>???</p> : <img src={pokemon.imgSrc} alt={pokemon.name} />}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string
    })
}

export default PokemonCard;
