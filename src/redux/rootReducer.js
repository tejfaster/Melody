import { combineReducers } from "redux";
import { TaskCreation, TaskComplete } from "./reducer/tracker";
import AsyncStorage from '@react-native-async-storage/async-storage'

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
}

const rootReducer = combineReducers({
    TaskCreation,
    TaskComplete
})

export { rootReducer, persistConfig }