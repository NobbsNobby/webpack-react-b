// Core
import React from "react";
import { List, Button } from "antd";
import { connect } from "react-redux";

// Instruments
import Styles from "./styles.m.css";

//Actions
import { usersActions } from "models/list/actions";

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = {
  fetchUsersAsync: usersActions.fetchUsersAsync
};

const UserList = ({ users, fetchUsersAsync }) => {
  console.log(users);
  return (
    <div>
      <List
        bordered
        className={Styles.list}
        dataSource={users.map((i) => i.name)}
        header={<h3>User List</h3>}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
      <Button block type="primary" onClick={fetchUsersAsync}>
        Fetch Users
      </Button>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
