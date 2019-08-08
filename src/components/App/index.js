// Core
import React from "react";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

// Components
import HomePage from "pages/HomePage";
import FormPage from "pages/FormPage";
// Instruments
import Styles from "./styles.m.css";
import logo from "theme/assets/logo.jpg";

const mapStateToProps = ({ dummyReducer }) => {
  return {
    dummy: dummyReducer
  };
};
const App = () => (
  <div>
    <Layout className={Styles.page}>
      <Header>
        <nav className={Styles.navigation}>
          <Link className={Styles.item} to="/">
            Home
          </Link>
          <Link className={Styles.item} to="/form">
            Form
          </Link>
        </nav>
      </Header>
      <Content className={Styles.content}>
        <Route exact component={HomePage} path="/" />
        <Route component={FormPage} path="/Form/" />
      </Content>
      <Footer className={Styles.footer}>
        <img alt="Nord-Soft logo" src={logo} />
      </Footer>
    </Layout>
  </div>
);

export default connect(mapStateToProps)(App);
