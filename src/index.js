import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './store/reducers'

import App from './App'

// screen.orientation.lock('portrait')

function saveState(state) {
  try {
    const serializedStorate = JSON.stringify(state)
    localStorage.setItem('state', serializedStorate)
  } catch (e) {
    console.log(e)
  }
}

function loadState() {
  try {
    const serializedStorage = localStorage.getItem('state')
    if (serializedStorage === null) return undefined
    return JSON.parse(serializedStorage)
  } catch (e) {
    return undefined
  }
}

const persistedStore = loadState()

const store = createStore(rootReducer, persistedStore)

store.subscribe(() => saveState({ cart: store.getState().cart }))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
