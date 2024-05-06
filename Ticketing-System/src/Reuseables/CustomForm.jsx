import React from 'react';
import { Form, Input } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const { TextArea } = Input;

const CustomForm = () => (
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
    <Form.Item className='font-bold text-2xl'
      label="Name"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <br/>
      <Input className='border-black ' />
    </Form.Item>

    <Form.Item className='font-bold text-2xl'
      label="Message"
      name="messgae"
      rules={[
        {
          required: true,
          message: 'Please input your Message!',
        },
      ]}
    >
      <br/>
      {/* <br/> */}
            <TextArea className='border-black ' rows={6} placeholder="Enter your text here" />

      {/* <Input.TextArea/> */}
    </Form.Item>
  </Form>
);
export default CustomForm;