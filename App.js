import React from 'react'
import Dashboard from './src/screen/tracker/Dashboard'

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { Store, persistor } from './src/redux/store'

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <Dashboard />
      </PersistGate>
    </Provider>
  )
}

export default App