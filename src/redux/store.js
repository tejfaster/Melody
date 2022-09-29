import { createStore } from 'redux'
import {rootReducer,persistConfig} from './rootReducer'
import { persistStore, persistReducer } from 'redux-persist'

const persistedReducer = persistReducer(persistConfig, rootReducer)

const Store = createStore(persistedReducer)
const persistor = persistStore(Store)
export {Store,persistor}