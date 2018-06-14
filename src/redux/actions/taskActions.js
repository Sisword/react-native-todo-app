import { ADD_TASK, DELETE_TASK } from '../constants/task'

export function addTask(title, data, hTime, mTime) {
    return {
        type: ADD_TASK,
        payload: {
            title, data, hTime, mTime
        }
    }
}

export function deleteTask(id) {
    return {
        type: DELETE_TASK,
        payload: {
            id
        }
    }

}