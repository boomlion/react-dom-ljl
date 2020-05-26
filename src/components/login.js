import React, { Component } from 'react'
import { Form, Input, Button, Row, Col } from 'antd'
import { createBrowserHistory } from 'history'; // 如果是history路由
// import QueueAnim from 'rc-queue-anim';
// import { connect } from 'react-redux'
// import { hashHistory/* , Link */ } from 'react-router'
// import QueuiAnim from 'rc-queue-anim'
import Logo from './logo'
import "../styles/login.scss"
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      isCertificates: false,
      show: true,
    }
  }
  render() {
    const onFinish = values => {
      sessionStorage.setItem('token', JSON.stringify(values))
      console.log(this.props)
      const history = createBrowserHistory()
      history.push('/')
    };
  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    }; 
    return ( 
      <div className="login-container">
        <div style={{height: '100%'}}>
          <Logo className="animation-login">
            <div key="0" className="title">{'BOOMION'}
            </div>
          </Logo>
          <Row style={{marginTop: '30px'}}>
            <Col span={8} />
            <Col span={8}>
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
                  label="用户"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: '请完善用户姓名!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="密码"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: '请完善用户密码!',
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    登陆
                  </Button>
                </Form.Item>
              </Form>
            </Col>
            <Col span={8} />
          </Row>
        </div>
      </div>
     )
  }
}
