import React, { Component } from 'react';
import Styles from './styles.m.css';

class App extends Component {
    render() {
        return (
            <div className = {Styles.app}>
                <Button />
                <h1 className = {Styles.header}>Everything is ready to start</h1>
            </div>

        );
    }
}

export default App;
