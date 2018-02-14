import React from 'react';
import { connect } from 'react-redux';
import { Piece } from '../components/piece';
import { boardCellClick } from '../actions/action_creator'

const mapStateToProps = state => {

    return {
        temporarilyRevealedComponent: state.temporarilyRevealedComponent
    }
}

const mapDispatchToProps = dispatch => {

    return {
        onBoardCellClick: (clickedElement) => {
            dispatch(boardCellClick(clickedElement));
        }
    }
}

class PieceContainer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isRevealed: false,
            isTemporarilyRevealed: false,
        }
        this.onBoardCellClick = this.props.onBoardCellClick.bind(null, this, this.props.temporarilyRevealedComponent);
    }

    render(){
        const {icon, onBoardCellClick} = this.props;

        return (
            <Piece
                icon={icon}
                isRevealed={this.state.isRevealed}
                isTemporarilyRevealed={this.state.isTemporarilyRevealed}
                onClick={this.onBoardCellClick}
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PieceContainer);