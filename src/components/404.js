import React, { Component } from 'react'

// import { connect } from 'react-redux'
// import { hashHistory/* , Link */ } from 'react-router'
// import QueuiAnim from 'rc-queue-anim'
import { Progress, Button } from 'antd'
import { Link } from 'react-router'
// 声明组件  并对外输出
export default class Notfound extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props) {
    super(props)
    this.state = {
      // activeTab: 'pop' ,
    }
  }

  render() {
    return (
      <div className="developing notfound">
        <Progress
          type="circle"
          percent={100}
          format={() => '404'}
          width={200}
          status="active"
        />

        <div className="link ptbig">
          <p className="mbbig"><Link to="/">跳转至首页</Link></p>
          <p className="mbbig"><Link to="/login">跳转至登陆页</Link></p>
          <Button type="primary" onClick={() => window.history.go(-1)}>返回上一页</Button>
        </div>
      </div>
    )
  }
}
