const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=25';

const fetchPokemon = () => {
    return fetch (URL)
    .then (res => res.json())
}

export default fetchPokemon;