import React from 'react';
import './../styles/board.css';
import { connect } from 'react-redux';
import { iconSet } from '../constants/icons';
import PieceContainer from './piece_container';
import { winGame } from '../actions/action_creator';

const mapStateToProps = state => {
    return {
        correctGuessNumber: state.correctGuessNumber,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        winGame: () => {
            dispatch(winGame());
        }
    };
};

class Board extends React.Component{

    shouldComponentUpdate(){
        const {
            correctGuessNumber,
            winGame
        } = this.props;

        if(14 === correctGuessNumber){
            winGame();
        }

        return false;
    }

    render(){
        const icons = Object.values(iconSet).concat(Object.values(iconSet));

        icons.sort(() => {
            return (Math.random() < 0.5) ? -1 : 1;
        });

        return (
            <div className='board flexbox-center'>
                <div className='board-piece-container'>
                    {icons.map((item) => {
                        return <PieceContainer icon={item} key={Math.random() + Math.random()}/>
                    })}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);