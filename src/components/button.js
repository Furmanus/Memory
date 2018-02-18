import React from 'react';
import PropTypes from 'prop-types';
import './../styles/button.css';

export class Button extends React.PureComponent{

    render(){
        const {
            buttonText,
            isDisabled,
            onClick
        } = this.props;

        return <button className='button' type='button' disabled={isDisabled} onClick={onClick}>{buttonText}</button>;
    }
}

Button.propTypes = {
    buttonText: PropTypes.string,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired
};
Button.defaultProps = {
    buttonText: 'Click',
    isDisabled: false
};