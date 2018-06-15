import { ADD_TASK, DELETE_TASK } from '../constants/task'

const initialState = [
    {
        title: 'Название задачи 1',
        data: 'Сегодня',
        hTime: 11,
        mTime: 12,
    },
    {
        title: 'Название задачи 2 Название задачи 2 Название задачи 2 Название задачи 2 Название задачи 2 Название задачи 2',
        data: 'Сегодня',
        hTime: 12,
        mTime: 13,
    },
    {
        title: 'Название задачи 4',
        data: 'Сегодня',
        hTime: 9,
        mTime: 10,
    },
    {
        title: 'Название задачи 5',
        data: 'Сегодня',
        hTime: 16,
        mTime: 19,
    },
    {
        title: 'Название задачи 6',
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