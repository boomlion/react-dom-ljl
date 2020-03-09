import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import style from "./login.module.scss"
// const loginStyle = {
//   color: '20px',
//   backgroundColor: 'red',
//   height: '100%'
// }
const layout = {
  labelCol: {
    span: 0,
  },
  wrapperCol: {
    span: 24,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 0,
    span: 4,
  },
};
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const onFinish = values => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    }
    return ( 
      <div className={style.login}>
        <div className={style.left} />
        <div className={style.right}>
          <div className={style.loginForm}>
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: '请输入用户名',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: '请输入密码',
                },
              ]}
            >
              <Input.Password prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"/>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                登陆
              </Button>
            </Form.Item>
          </Form>
          </div>
        </div>
      </div>
     )
  }
}
 
export default Login;