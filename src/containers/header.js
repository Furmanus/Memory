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
        gameStarted: state.gameStarted,
        currentTime: state.currentTime,
        timerId: state.timerId
    }
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
    }
}

class Header extends React.Component{

    render(){
        const {
            gameStarted,
            currentTime,
            onStartClick,
            onRetryClick,
            timerId
        } = this.props;

        return (
            <div className='header flexbox flexbox-vertical-center'>
                <div className='button-holder flexbox-center'>
                    <Button buttonText='Start' onClick={onStartClick} isDisabled={gameStarted}/>
                    <Button buttonText='Retry' onClick={onRetryClick.bind(Header, timerId)} isDisabled={!gameStarted}/>
                </div>
                <div className='button-holder flexbox-center flexbox'>
                    <Timer time={currentTime}/>
                    <Counter/>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);