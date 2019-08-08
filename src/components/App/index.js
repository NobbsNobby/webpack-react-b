// Core
import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// Instruments
import Styles from './styles.m.css';
import Form from '../Form';

const mapStateToProps = ({ dummyReducer }) => {
  return {
    dummy: dummyReducer
  };
};
const App = () => (
  <div className={ Styles.app }>
    <h1 className={ Styles.header }>Everything is ready to start</h1>
    <Link to='/form/'>About</Link>
    <Route component={ Form } path='/form/' />
  </div>
);

export default connect(mapStateToProps)(App);
