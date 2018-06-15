import { ADD_TASK, DELETE_TASK, SEARCH } from '../constants/task'

const initialState = [
    {
        title: 'qa',
        data: 'Сегодня',
        hTime: 11,
        mTime: 12,
    },
    {
        title: 'aq',
        data: 'Сегодня',
        hTime: 12,
        mTime: 13,
    },
    {
        title: 'bbb b bbbbb',
        data: 'Сегодня',
        hTime: 9,
        mTime: 10,
    },
    {
        title: 'vvvv v vv vv',
        data: 'Сегодня',
        hTime: 16,
        mTime: 19,
    },
    {
        title: 'rrrr r rrr',
        data: 'Сегодня',
        hTime: 16,
        mTime: 19,
    },
];

export default function task(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return state.concat(action.payload);
        case DELETE_TASK:
            let newState = Object.assign([], state);
            newState.splice(action.payload.id, 1);
            return newState;
        default : return state
    }
}