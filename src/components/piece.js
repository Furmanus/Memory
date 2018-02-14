import React from 'react';
import PropTypes from 'prop-types';
import { defaultIcon } from '../constants/icons'

export class Piece extends React.PureComponent{

    render(){
        const {
            isRevealed,
            isTemporarilyRevealed,
            onClick,
            icon
        } = this.props;
        const iconClassName = isRevealed || isTemporarilyRevealed ? icon : defaultIcon;
        const colouClassName = isRevealed || isTemporarilyRevealed ? 'snowColor' : 'grayColor';

        return (
            <div className='piece flexbox-center' onClick={onClick}>
                <i className={`${iconClassName} ${colouClassName}`}/>
            </div>);
    }
}

Piece.propTypes = {
    isRevealed: PropTypes.bool,
    isTemporarilyRevealed: PropTypes.bool,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

Piece.defaultProps = {
    isRevealed: false,
    isTemporarilyRevealed: false
};