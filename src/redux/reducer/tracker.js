import { create_Data, completed_Data, delete_Data } from '../action/tracker'
import { setStorage} from '../../utils/storage'

const taskCreationState = {
    data: {
        name: "",
        isActive: false,
        isPaused: true,
        count: 0
    },
}

export const TaskCreation = (state = taskCreationState, action) => {
    switch (action.type) {
        case create_Data:
            return {
                ...state,
                data: {
                    name: action.payload[0],
                    isActive: action.payload[1],
                    isPaused: action.payload[2],
                    count: state.data.count + 1,
                }
            }
        default:
            return state
    }
}

const completeState = {
    list: []
}

export const TaskComplete = (state = completeState, action) => {
    switch (action.type) {
        case completed_Data:
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        name: action.payload[0],
                        time: action.payload[1],
                        count: action.payload[2],
                        date: Date().slice(4, 15)
                    }
                ]
            }
        case delete_Data:
            console.log(state.list[0])
            return {
                ...state,
                list: state.list.filter(item => {
                    return item.count !== action.payload
                })
            }
        default:
            return state
    }
}