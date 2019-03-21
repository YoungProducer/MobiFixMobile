import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import combineReducers from './recuders/CombineReducers'
import App from './App'

// const store = createStore(combineReducers)

render(
    <App />,
    document.getElementById('root')
)