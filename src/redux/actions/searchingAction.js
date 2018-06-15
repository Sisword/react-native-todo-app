import { ADD_TASK, DELETE_TASK, SEARCH } from '../constants/task'

export function searchTask(text, stateTasks, stateSearching) {
    return {
        type: SEARCH,
        payload: {
            text,
            stateTasks,
            stateSearching,
        }
    }
}