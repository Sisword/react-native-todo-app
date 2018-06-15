import { ADD_TASK, DELETE_TASK, SEARCH } from '../constants/task'

const initialState = [];

export default function searching(state = initialState, action) {
    switch (action.type) {
        case SEARCH:
            action.payload.stateSearching = action.payload.stateTasks.filter((item)=>{
                const itemData = item.title.toUpperCase();
                const textData = action.payload.text.toUpperCase();
                return itemData.indexOf(textData) > -1
            });
            return action.payload.stateSearching;
        default : return state
    }
}