import React from 'react'
import { connect } from 'react-redux'

import PokemonItem from './PokemonItem'

const PokeList = ({ pokemons, click }) => {
  return (
    <div className='list-container'>
      <h2>Try : {click}</h2>
      <h2>
        {pokemons.filter(pokemon => pokemon.isCatch).length} / {pokemons.length}
      </h2>
      <ul>
        {Object.keys(pokemons).map(id => (
          <PokemonItem key={id} pokemon={pokemons[id]} />
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = ({ pokemons, click }) => {
  return {
    pokemons,
    click
  }
}

export default connect(mapStateToProps)(PokeList)
