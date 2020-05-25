import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import Provider from './store/store'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
)
