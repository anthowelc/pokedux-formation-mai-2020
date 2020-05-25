import React from 'react'

import './GameBoy.css'

import Screen from './Screen'

const GameBoy = ({ showPokemon, catchPokemon, click }) => {
  return (
    <div>
      <div className='gameboy'>
        <div className='body'>
          <div className='screen-box'>
            <div className='power-box'>
              <div className='power-light' />
              <div className='power-status'>)))</div>
              <div className='power-text'>POWER</div>
            </div>
            <div className='screen-display'>
              <Screen />
            </div>
            <div className='gameboy-color-logo'>
              <span className='logo-gb'>GAME BOY </span>
              <span className='logo-color'>
                <span className='logo-color-c'>C</span>
                <span className='logo-color-o1'>O</span>
                <span className='logo-color-l'>L</span>
                <span className='logo-color-o2'>O</span>
                <span className='logo-color-r'>R</span>
              </span>
            </div>
          </div>

          <div className='nintendo-logo-body'>Nintendo</div>
          <div className='button-box'>
            <div className='arrow-group'>
              <div className='up-box'>
                <span className='arrow up' />
              </div>
              <div className='right-box'>
                <span className='arrow right' />
              </div>
              <div className='down-box'>
                <span className='arrow down' />
              </div>
              <div className='center-box'>
                <span className='dent'>
                  <span className='dent-highlight' />
                </span>
              </div>
              <div className='left-box'>
                <span className='arrow left' />
              </div>
            </div>

            <div
              className='ab-button a'
              onClick={() => {
                catchPokemon()
                click()
              }}
            >
              <span className='button-text-height'>A</span>
            </div>

            <div className='ab-button b' onClick={() => showPokemon()}>
              <span className='button-text-height'>B</span>
            </div>
          </div>
          <div className='bottom-box'>
            <div
              className='pill-button button-select'
              onClick={() => showPokemon()}
            >
              <label className='select'>SELECT</label>
            </div>
            <div
              className='pill-button button-start'
              onClick={() => showPokemon()}
            >
              <label className='start'>START</label>
            </div>
            <div className='speaker'>
              <div className='row1'>
                <div className='dot-hole' />
                <div className='dot-hole' />
                <div className='dot-hole' />
              </div>
              <div className='row2'>
                <div className='dot-hole' />
                <div className='dot-hole' />
                <div className='dot-hole' />
                <div className='dot-hole' />
              </div>
              <div className='row3'>
                <div className='dot-hole' />
                <div className='dot-hole' />
                <div className='dot-hole' />
                <div className='dot-hole' />
              </div>
              <div className='row4'>
                <div className='dot-hole' />
                <div className='dot-hole' />
                <div className='dot-hole' />
                <div className='dot-hole' />
              </div>
              <div className='row5'>
                <div className='dot-hole' />
                <div className='dot-hole' />
                <div className='dot-hole' />
                <div className='dot-hole' />
              </div>
              <div className='row6'>
                <div className='dot-hole' />
                <div className='dot-hole' />
                <div className='dot-hole' />
                <div className='dot-hole' />
              </div>
              <div className='row7'>
                <div className='dot-hole' />
                <div className='dot-hole' />
                <div className='dot-hole' />
                <div className='dot-hole' />
              </div>
              <div className='row8'>
                <div className='dot-hole' />
                <div className='dot-hole' />
                <div className='dot-hole' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameBoy
