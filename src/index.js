// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Instruments
import './theme/init.css';
import { store } from './init/store';

// Components
import App from './components/App';

ReactDOM.render(
    <Provider store = { store }>
        <App />
    </Provider>,
    document.getElementById('app')
);
