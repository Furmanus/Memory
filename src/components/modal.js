import React from 'react';
import './../styles/modal.css';
import { Button } from './button'
import PropTypes from 'prop-types';

export default class Modal extends React.Component{
    render(){
        const {
            modalText,
            onButtonClick
        } = this.props;

        return (
            <div className="modal">
                <div className="modal-text">{modalText}</div>
                <Button onClick={onButtonClick} buttonText="Start again"/>
            </div>
        );
    }
}

Modal.propTypes = {
    modalText: PropTypes.node,
    onButtonClick: PropTypes.func.isRequired
};
Modal.defaultProps = {
    modalText: ''
};