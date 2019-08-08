// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Instruments
import Styles from './styles.m.css';


const mapStateToProps = ({ dummyReducer }) => {
    return {
        dummy: dummyReducer
    };
};
@connect(mapStateToProps)
class App extends Component {
    render() {
        return (
            <div className = { Styles.app }>
                <h1 className = { Styles.header }>Everything is ready to start</h1>
            </div>
        );
    }
}

export default App;
