import React from 'react';
import PropTypes from 'prop-types';

export class Timer extends React.PureComponent{

    render(){
        const {time} = this.props;

        return (
            <div className='timer-container flexbox-vertical-center'>
                <i className='fa fa-clock-o space-right'/>
                <span>{time}</span>
            </div>
        );
    }
}

Timer.propTypes = {
    time: PropTypes.string
};

Timer.defaultProps = {
    time: '00:00:00'
};