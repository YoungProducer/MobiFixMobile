import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App'

import combineReducers from './store/reducers'

import burgerStateReducer from './store/DropDownMenu/reducers'

const store = createStore(burgerStateReducer)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)