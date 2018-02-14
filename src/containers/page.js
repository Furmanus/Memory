import React from 'react';
import Header from './header';
import Board from './board';

export class Page extends React.Component{

    render(){
        return (
            <div className='full-width full-height'>
                <Header/>
                <Board/>
            </div>
        );
    }
}