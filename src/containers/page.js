import React from 'react';
import Header from './header';
import Board from './board';
import Modal from './../components/modal';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        isGameWon: state.isGameWon,
        currentTime: state.currentTime,
        guessCounter: state.guessCounter
    };
};

class Page extends React.Component{

    shouldComponentUpdate(nextProps){
        return !!nextProps.isGameWon;
    }

    renderModalWinText(finishedTime, finishedCount){
        return (
            <div>
                <p>Congratulations! You finished the puzzle!</p>
                <p>Failed guesses: {finishedCount}</p>
                <p>Time: {finishedTime}</p>
            </div>
        );
    }

    onModalButtonClick(){
        location.reload();
    }

    render(){
        const {
            isGameWon,
            currentTime,
            guessCounter
        } = this.props;

        return (
            <div className='full-width full-height'>
                <div className={`page-inner${isGameWon ? ' disabled' : ''}`}>
                    <Header/>
                    <Board/>
                </div>
                {isGameWon ?
                    <Modal
                        modalText={this.renderModalWinText(currentTime, guessCounter)}
                        onButtonClick={this.onModalButtonClick}
                    /> : null}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Page);