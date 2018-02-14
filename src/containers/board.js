import React from 'react';
import './../styles/board.css';
import { connect } from 'react-redux';
import { iconSet } from '../constants/icons';
import PieceContainer from './piece_container';

const mapStateToProps = state => {

    return {

    }
}

const mapDispatchToProps = dispatch => {

    return {

    }
}

class Board extends React.Component{

    render(){
        const icons = Object.values(iconSet).concat(Object.values(iconSet));
        let rowCounter = 1;
        let columnCounter = 1;

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