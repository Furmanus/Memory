import {
    RETRY_GAME,
    START_GAME,
    START_TIMER,
    STOP_TIMER,
    UPDATE_TIMER
} from '../constants/actions'
import { createReducer } from 'redux-create-reducer';

const initialState = {
    guessCounter: 0,
    currentTime: `00:00:00`,
    timerId: undefined,
    gameStarted: false,
    temporarilyRevealedComponent: null
}

export const reducer = createReducer(initialState, {

    [START_GAME]: (state) => {
        return Object.assign({}, state, {
            gameStarted: true
        });
    },
    [RETRY_GAME]: (state) => {
        return Object.assign({}, state, {
            gameStarted: false
        });
    },
    [START_TIMER]: (state, action) => {
        return Object.assign({}, state, {
            timerId: action.timerId
        })
    },
    [STOP_TIMER]: state => {
        return Object.assign({}, state, {
            timerId: undefined,
            currentTime: `00:00:00`
        });
    },
    [UPDATE_TIMER]: (state, action) => {
        return Object.assign({}, state, {
            currentTime: action.currentTime
        });
    }
});