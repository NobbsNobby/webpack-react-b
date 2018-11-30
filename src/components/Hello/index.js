// @flow
import React, { Component } from 'react';
import Styles from './styles.m.css';

type Props = {
  value: number
};

class Hello extends Component<Props> {
  render() {
    return (
      <div className={Styles.hello}>
        <h2 className={Styles.header}>
          Hello Component {this.props.value}
        </h2>
      </div>
    );
  }
}

export default Hello;
