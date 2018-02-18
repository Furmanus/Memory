import Page from './containers/page';
import React from 'react';
import ReactDOM from 'react-dom';
import { reducer } from './reducers/reducer';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

let store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Page/>
    </Provider>,
    document.getElementById('app')
);