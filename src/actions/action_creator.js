import {
    BOARD_CELL_CLICK_CORRECT_GUESS,
    BOARD_CELL_CLICK_FIRST_GUESS,
    BOARD_CELL_CLICK_SECOND_GUESS, PAUSE_GAME,
    RETRY_GAME,
    START_GAME,
    START_TIMER,
    STOP_TIMER,
    UPDATE_TIMER, WIN_GAME
} from '../constants/actions';
import { revealedCell } from '../constants/cells';

export function startGame(){
    return {
        type: START_GAME
    };
}
export function retryGame(timerId){
    return dispatch => {
        dispatch(stopTimer(timerId));

        dispatch({
            type: RETRY_GAME
        });

        location.reload()
    }

}
export function startTimer(){
    return dispatch => {
        const startingTime = Date.now();
        const timerId = window.setInterval(() => {
            dispatch(updateTimer(startingTime))
        }, 5);

        dispatch({
            type: START_TIMER,
            timerId
        });
    }
}
export function stopTimer(forceReset = true){
    return {
        type: STOP_TIMER,
        forceReset
    }
}
export function updateTimer(startingTime){
    const timePassed = Date.now() - startingTime;
    let seconds = Math.floor(timePassed/1000) % 60;
    let minutes = Math.floor(timePassed/(1000 * 60)) % 60;
    let hours = Math.floor(timePassed /(1000 * 60 * 60));
    let currentTime;

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    hours = hours < 10 ? `0${hours}` : hours;

    currentTime = `${hours}:${minutes}:${seconds}`
    return{
        type: UPDATE_TIMER,
        currentTime
    }
}
export function boardCellClick(clickedElement, temporarilyRevealedComponent){
    return dispatch => {
        if (!temporarilyRevealedComponent) {
            if (!clickedElement.state.isTemporarilyRevealed && !clickedElement.state.isRevealed) {
                clickedElement.setState({
                    isTemporarilyRevealed: true
                });
            }

            dispatch({
                type: BOARD_CELL_CLICK_FIRST_GUESS,
                temporarilyRevealedComponent: clickedElement
            });
        } else {
            clickedElement.setState({
                isTemporarilyRevealed: true
            });

            if(clickedElement.getIcon() === temporarilyRevealedComponent.getIcon()){
                clickedElement.setState(revealedCell);
                temporarilyRevealedComponent.setState(revealedCell);

                dispatch({
                    type: BOARD_CELL_CLICK_CORRECT_GUESS
                });
            }else{
                dispatch({
                    type: PAUSE_GAME
                });

                window.setTimeout(() => {
                    clickedElement.setState({
                        isTemporarilyRevealed: false
                    });
                    temporarilyRevealedComponent.setState({
                        isTemporarilyRevealed: false
                    });

                    dispatch({
                        type: BOARD_CELL_CLICK_SECOND_GUESS
                    });
                }, 1000);
            }
        }
    }
}

export function winGame(){
    return dispatch => {
        dispatch({
            type: STOP_TIMER,
            forceReset: false
        });
        dispatch({
            type: WIN_GAME
        });
    };
}