// Core
import React from "react";
import { List, Typography } from "antd";

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

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires."
];

const UserList = () => (
  <div>
    <List
      bordered
      className={Styles.list}
      dataSource={data}
      header={<h3>User List</h3>}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  </div>
);

export default UserList;
