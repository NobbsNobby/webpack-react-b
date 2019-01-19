import * as React from 'react';
import * as Styles from './styles.m.css';

class App extends React.Component {
    render() {
        return (
            <div className = { Styles.app }>
                <h1 className = { Styles.header }>Everything is ready to start</h1>
            </div>

        );
    }
}

export default App;
