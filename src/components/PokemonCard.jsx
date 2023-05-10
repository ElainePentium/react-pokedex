function PokemonCard(props) {
    console.log("POKEMON:", props)

    return (
        <figure>
            {props.pokemon.imgSrc == undefined ? <p>???</p> : <img src={props.pokemon.imgSrc} alt={props.pokemon.name} />}
            <figcaption>{props.pokemon.name}</figcaption>
        </figure>
    );
}

export default PokemonCard;
