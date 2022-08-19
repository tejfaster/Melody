import React from 'react'
import Dashboard from './src/screen/tracker/Dashboard'
import { Provider } from 'react-redux'
import Store from './src/redux/store'

const App = () => {
  return (
    <Provider store={Store}>
      <Dashboard />
    </Provider>
  )
}

export default App