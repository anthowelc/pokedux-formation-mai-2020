import React from 'react'
import Spinner from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='loader'>
      <Spinner type='Puff' color='#00BFFF' height={100} width={100} />
    </div>
  )
}

export default Loader
