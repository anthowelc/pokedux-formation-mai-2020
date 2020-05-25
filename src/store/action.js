export const CATCH_POKEMON = 'CATCH_POKEMON'
export const SHOW_POKEMON = 'SHOW_POKEMON'
export const FETCH_POKEMON_PENDING = 'FETCH_POKEMON_PENDING'
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS'
export const CLICK = 'CLICK'

export const fetchPokemonsPending = () => ({
  type: FETCH_POKEMON_PENDING
})
export const fetchPokemonsSuccess = pokemons => ({
  type: FETCH_POKEMON_SUCCESS,
  pokemons
})

export const catchPokemonAction = () => {
  const random = Math.floor(Math.random() * 255)
  return dispatch => {
    dispatch({ type: CATCH_POKEMON, random })
  }
}

export const showPokemonAction = pokemons => {
  const max = pokemons.filter(pokemon => !pokemon.isCatch).length
  const random = Math.floor(Math.random() * max)
  return dispatch => {
    dispatch({ type: SHOW_POKEMON, random })
  }
}
