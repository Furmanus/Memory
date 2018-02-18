import React from 'react';
import './../styles/header.css';
import { Button } from '../components/button';
import { connect } from 'react-redux';
import {
    retryGame,
    startGame,
    startTimer
} from '../actions/action_creator';
import { Timer } from '../components/timer';
import { Counter } from '../components/counter';

const mapStateToProps = state => {

    return {
        hasGameStarted: state.hasGameStarted,
        currentTime: state.currentTime,
        timerId: state.timerId,
        guessCounter: state.guessCounter
    };
};
const mapDispatchToProps = dispatch => {

    return {
        onStartClick: () => {
            dispatch(startGame());
            dispatch(startTimer());
        },
        onRetryClick: (timerId) => {
            dispatch(retryGame(timerId));
        },
    };
}

class Header extends React.Component{

    render(){
        const {
            hasGameStarted,
            currentTime,
            onStartClick,
            onRetryClick,
            timerId,
            guessCounter
        } = this.props;

        return (
            <div className='header flexbox flexbox-vertical-center'>
                <div className='button-holder flexbox-center flex-end'>
                    <Button buttonText='Start' onClick={onStartClick} isDisabled={hasGameStarted}/>
                    <Button buttonText='Retry' onClick={onRetryClick.bind(Header, timerId)} isDisabled={!hasGameStarted}/>
                </div>
                <div className='button-holder flexbox-center flex-start'>
                    <Timer time={currentTime}/>
                    <Counter counter={100 - guessCounter}/>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);