import React from 'react'
import Dashboard from './src/screen/tracker/Dashboard'
import { Provider } from 'react-redux'
import Store from './src/redux/store'
import { Button, View } from 'react-native'
import RazorpayCheckout from 'react-native-razorpay';
const App = () => {
  return (
    <Provider store={Store}>
      <Dashboard />
    </Provider>
  )
}
export default App