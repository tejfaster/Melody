export const create_Data = "CREATEDATA"
export const completed_Data = "COMPLETEDDATA"
export const delete_Data = "DELETEDATA"

export const TaskCreate = (...payload) => {
    return {
        type: create_Data,
        payload: payload
    }
}

export const TaskFinish = (...payload) => {
    return {
        type: completed_Data,
        payload: payload
    }
}

export const TaskDelete = (payload) => {
    console.log("action",payload)
    return {
        type: delete_Data,
        payload: payload
    }
}