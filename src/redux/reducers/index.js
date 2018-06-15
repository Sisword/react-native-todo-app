import { combineReducers } from 'redux'
import task from './taskReducer'
import searching from './searchingReducer'

export default combineReducers({
    task,
    searching
})