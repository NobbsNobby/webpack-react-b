// Core
import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
// Instruments
import Styles from "./styles.m.css";

const SubmitForm = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  const { getFieldDecorator } = props.form;
  return (
    <div className={Styles.content}>
      <Form className={Styles.loginForm} onSubmit={handleSubmit}>
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              placeholder="Username"
              prefix={<Icon style={{ color: "rgba(0,0,0,.25)" }} type="user" />}
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              placeholder="Password"
              prefix={<Icon style={{ color: "rgba(0,0,0,.25)" }} type="lock" />}
              type="password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a className={Styles.loginFormForgot} href="">
            Forgot password
          </a>
          <Button
            className={Styles.loginFormButton}
            htmlType="submit"
            type="primary"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(SubmitForm);

export default WrappedNormalLoginForm;
