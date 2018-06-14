import ADD_TASK from '../constants/task'
import DELETE_TASK from '../constants/task'

export function addTask(title, data, hTime, mTime) {
    return {
        type: ADD_TASK,
        payload: {
            title, data, hTime, mTime
        }
    }
}