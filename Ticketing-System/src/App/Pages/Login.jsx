import React from "react";
import "../../App.css";
import img from "../../assets/login.png";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


const Login = () => {
  return (
    <div className="w-full h-screen  ">
      <div
        style={{ display: "flex", flexDirection: "row" }}
        className="d-flex flex-row h-screen w-[100%]  border justify-center items-center content-center "
      >
        <div className="w-1/2 rounded-md border-gray-500  justify-center items-center">
          <img className="h-64 justify-center items-center ml-64" src={img} />
          <p className="ml-64 font-bold">
            New Here <Link to="">Sign Up</Link> here
          </p>
        </div>
        <div className="w-1/2 bg-yellow-300 rounded-md border-gray-500 mr-11">
          <h2 className="font-bold text-2xl text-center mb-8">Login Here</h2>
        <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Link to ='/'>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
      </Link>
    </Form.Item>
  </Form>

        </div>
      </div>
    </div>
  );
};

export default Login;
