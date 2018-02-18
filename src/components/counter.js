import React from 'react';
import PropTypes from 'prop-types';

export class Counter extends React.PureComponent{

    render(){
        return (
            <div className='flexbox-vertical-center counter-container'>
                <i className='fa fa-trophy space-right'/>
                <span>{this.props.counter}</span>
            </div>
        );
    }
}

Counter.propTypes = {
    counter: PropTypes.number
};

Counter.defaultProps = {
    counter: 0
};

