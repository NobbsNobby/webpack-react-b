// @flow
// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';

type Props = {
    /**/
};

class App extends Component<Props> {
    render() {
        return (
            <div className = { Styles.app }>
                <h1 className = { Styles.header }>Everything is ready to start</h1>
            </div>
        );
    }
}

export default App;
