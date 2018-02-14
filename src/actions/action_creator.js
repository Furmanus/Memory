import {
    BOARD_CELL_CLICK,
    RETRY_GAME,
    START_GAME,
    START_TIMER,
    STOP_TIMER,
    UPDATE_TIMER
} from '../constants/actions'

export function startGame(){
    return {
        type: START_GAME
    }
}
export function retryGame(timerId){
    return (dispatch) => {
        dispatch(stopTimer(timerId));

        dispatch({
            type: RETRY_GAME
        });
    }

}
export function startTimer(){
    return (dispatch) => {
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
export function stopTimer(timerId){
    window.clearTimeout(timerId);

    return {
        type: STOP_TIMER,
    }
}
export function updateTimer(startingTime){
    const timePassed = Date.now() - startingTime;
    let seconds = Math.floor(timePassed/1000);
    let minutes = Math.floor(timePassed/(1000 * 60));
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
        if (!clickedElement.state.isTemporarilyRevealed && !clickedElement.state.isRevealed) {
            clickedElement.setState({
                isTemporarilyRevealed: true
            });
        }

        if (!temporarilyRevealedComponent) {

            return {
                type: BOARD_CELL_CLICK,
                temporarilyRevealedComponent: clickedElement
            }
        }
    }
}