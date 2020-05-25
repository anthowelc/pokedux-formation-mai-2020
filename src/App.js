import React, { useEffect } from 'react'
import './styles.css'
import { connect } from 'react-redux'

import fetchPokemons from './store/fetchPokemons'
import { showPokemonAction, catchPokemonAction, CLICK } from './store/action'

import GameBoy from './components/GameBoy'
import PokeList from './components/PokeList'
import Loader from './components/Loader'

const App = ({
  pokemons,
  fetchPokemons,
  pending,
  showPokemon,
  catchPokemon,
  click
}) => {
  useEffect(() => {
    fetchPokemons()
  }, [fetchPokemons])

  if (pending) {
    return <Loader />
  }

  return (
    <div className='App'>
      <GameBoy
        showPokemon={() => showPokemon(pokemons)}
        catchPokemon={catchPokemon}
        click={click}
      />
      <PokeList />
    </div>
  )
}

const mapStateToProps = ({ pending, pokemons }) => {
  return {
    pending,
    pokemons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPokemons: () => dispatch(fetchPokemons()),
    showPokemon: pokemons => dispatch(showPokemonAction(pokemons)),
    catchPokemon: () => dispatch(catchPokemonAction()),
    click: () => dispatch({ type: CLICK })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
