import { create_Data, completed_Data } from '../action/tracker'

const taskCreationState = {
    data: {
        name: "",
        isActive: false,
        isPaused: true,
        count: 0
    },
}

export const TaskCreation = (state = taskCreationState, action) => {
    console.log(state.data.count)
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
    list: [
        {
            name: "",
            time: "",
            count: "",
            date: "",
        }
    ]
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
        default:
            return state
    }
}