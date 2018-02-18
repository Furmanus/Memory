import React from 'react';
import { connect } from 'react-redux';
import { Piece } from '../components/piece';
import { boardCellClick, winGame } from '../actions/action_creator'

const mapStateToProps = state => {

    return {
        temporarilyRevealedComponent: state.temporarilyRevealedComponent,
        hasGameStarted: state.hasGameStarted,
        preventClickActions: state.preventClickActions
    };
};
const mapDispatchToProps = dispatch => {

    return {
        onBoardCellClick: (clickedElement, temporarilyRevealedComponent) => {
            dispatch(boardCellClick(clickedElement, temporarilyRevealedComponent));
        }
    };
};

class PieceContainer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isRevealed: false,
            isTemporarilyRevealed: false,
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        const {
            onBoardCellClick,
            temporarilyRevealedComponent,
            hasGameStarted,
            preventClickActions
        } = this.props;

        if(hasGameStarted && !preventClickActions && !this.state.isRevealed && !this.state.isTemporarilyRevealed) {
            onBoardCellClick(this, temporarilyRevealedComponent);
        }
    }

    getIcon(){
        return this.props.icon;
    }

    render(){
        const {
            icon,
            onBoardCellClick,
        } = this.props;

        return (
            <Piece
                icon={icon}
                isRevealed={this.state.isRevealed}
                isTemporarilyRevealed={this.state.isTemporarilyRevealed}
                onClick={this.onClick}
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PieceContainer);