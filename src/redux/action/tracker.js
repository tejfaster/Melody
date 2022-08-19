export const create_Data = "CREATEDATA"
export const completed_Data = "COMPLETEDDATA"

export const TaskCreate = (...payload) => {
    return {
        type: create_Data,
        payload:payload
    }
}

export const TaskFinish = (...payload) => {
    return{
        type:completed_Data,
        payload:payload
    }
}