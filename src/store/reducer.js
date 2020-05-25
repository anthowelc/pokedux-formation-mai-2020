import {
  CATCH_POKEMON,
  SHOW_POKEMON,
  FETCH_POKEMON_PENDING,
  FETCH_POKEMON_SUCCESS,
  CLICK
} from './action'

import initialState from './initialState'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_POKEMON:
      return {
        ...state,
        onScreen: {
          ...state.pokemons.filter(pokemon => !pokemon.isCatch)[action.random]
        }
      }
    case CLICK:
      return {
        ...state,
        click: state.click + 1
      }
    case FETCH_POKEMON_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        pending: false,
        pokemons: action.pokemons
      }
    case CATCH_POKEMON:
      return {
        ...state,
        pokemons: state.pokemons.map(pokemon => {
          if (pokemon.id === state.onScreen.id) {
            const isCaught = pokemon.captureRate + action.random
            console.log(isCaught)
            if (isCaught >= 255) {
              return { ...pokemon, isCatch: true }
            }
            return pokemon
          }
          return pokemon
        })
      }
    default:
      return state
  }
}

export default reducer
