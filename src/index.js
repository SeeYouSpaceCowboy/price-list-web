import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

import App from './App'

const store = createStore(rootReducer, applyMiddleware(promise, thunk))

ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
