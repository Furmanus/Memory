import {
    BOARD_CELL_CLICK_CORRECT_GUESS,
    BOARD_CELL_CLICK_FIRST_GUESS,
    BOARD_CELL_CLICK_SECOND_GUESS,
    PAUSE_GAME,
    RETRY_GAME,
    START_GAME,
    START_TIMER,
    STOP_TIMER,
    UPDATE_TIMER,
    WIN_GAME
} from '../constants/actions';
import { createReducer } from 'redux-create-reducer';

const initialState = {
    guessCounter: 0,
    currentTime: `00:00:00`,
    timerId: undefined,
    hasGameStarted: false,
    temporarilyRevealedComponent: null,
    correctGuessNumber: 0,
    isGameWon: false,
    preventClickActions: false
};

export const reducer = createReducer(initialState, {

    [START_GAME]: state => {
        return Object.assign({}, state, {
            hasGameStarted: true
        });
    },
    [RETRY_GAME]: state => {
        return Object.assign({}, state, {
            hasGameStarted: false,
        });
    },
    [START_TIMER]: (state, action) => {
        return Object.assign({}, state, {
            timerId: action.timerId
        });
    },
    [STOP_TIMER]: (state, action) => {
        window.clearTimeout(state.timerId);

        return Object.assign({}, state, {
            timerId: undefined,
            currentTime: action.forceReset ? `00:00:00` : state.currentTime
        });
    },
    [UPDATE_TIMER]: (state, action) => {
        return Object.assign({}, state, {
            currentTime: action.currentTime
        });
    },
    [BOARD_CELL_CLICK_FIRST_GUESS]: (state, action) => {
        return Object.assign({}, state, {
            temporarilyRevealedComponent: action.temporarilyRevealedComponent
        });
    },
    [BOARD_CELL_CLICK_SECOND_GUESS]: state => {
        return Object.assign({}, state, {
            temporarilyRevealedComponent: null,
            preventClickActions: false,
            guessCounter: state.guessCounter + 1
        });
    },
    [BOARD_CELL_CLICK_CORRECT_GUESS]: state => {
        return Object.assign({}, state, {
            temporarilyRevealedComponent: null,
            correctGuessNumber: state.correctGuessNumber + 1
        });
    },
    [PAUSE_GAME]: state => {
        return Object.assign({}, state, {
            preventClickActions: true
        });
    },
    [WIN_GAME]: state => {
        return Object.assign({}, state, {
            isGameWon: true
        });
    }
});