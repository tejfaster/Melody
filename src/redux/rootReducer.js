import { combineReducers } from "redux";
import { TaskCreation,TaskComplete } from "./reducer/tracker";

const rootReducer = combineReducers({
    TaskCreation,
    TaskComplete
})

export default rootReducer