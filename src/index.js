// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Instruments
import './theme/init.css';
import { store } from './init/store';

// Components
import App from './components/App';

if(__DEV__) {
    console.log('dev');
}

ReactDOM.render(
    <Provider store = { store }>
        <App />
    </Provider>,
    document.getElementById('app')
);
