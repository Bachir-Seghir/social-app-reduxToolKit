import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import store from './app/store'

import { fetchUsers } from './features/users/usersSlice'

import './api/server'

store.dispatch(fetchUsers())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
