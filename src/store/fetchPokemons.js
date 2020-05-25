import { fetchPokemonsPending, fetchPokemonsSuccess } from './action'

const numberOfPokemon = 150

const urls = []

for (let i = 0; i < numberOfPokemon; i++) {
  urls.push(`https://pokeapi.co/api/v2/pokemon-species/${i + 1}`)
}

const requests = urls.map(url => fetch(url))

export default () => {
  return dispatch => {
    dispatch(fetchPokemonsPending())
    Promise.all(requests)
      .then(responses => Promise.all(responses.map(r => r.json())))
      .then(pokemons =>
        pokemons.map(pokemon => ({
          id: pokemon.id,
          name: pokemon.name,
          captureRate: pokemon.capture_rate,
          isCatch: false,
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
        }))
      )
      .then(pokemons => {
        dispatch(fetchPokemonsSuccess(pokemons))
        return pokemons
      })
  }
}
