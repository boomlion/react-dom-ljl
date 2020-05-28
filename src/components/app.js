import React, {Component}from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import { hashHistory/* , Link  */ } from 'react-router'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  SwapRightOutlined
} from '@ant-design/icons';
import "../styles/app.scss"
const { Header, Content, Sider } = Layout
const { SubMenu } = Menu;
// Since routes are regular React components, they
// may be rendered anywhere in the app, including in
// child elements.
//
// This helps when it's time to code-split your app
// into multiple bundles because code-splitting a
// React Router app is the same as code-splitting
// any other React app.
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      menu:[
        {id:10063,resName:"概览",resKey:"desk$/index",resIcon:"pgmb"},
        {id:600110233,resName:"图表",resKey:"echarts",resIcon:"statistics"},
        {id:100631,resName:"编辑器",resKey:"editor",resIcon:"duty"},
        {id:10062,resName:"设置中心",children:
          [{id:10108,resName:"用户管理",resKey:"set$/userManage",resIcon:"userManage"},{id:10109,resName:"角色管理",resKey:"set$/roleManage",resIcon:"roleManage"},{id:10110,resName:"权限管理",resKey:"set$/moduleManage",resIcon:"moduleManage"}],resKey:"set$",resIcon:"xtxg"}
      ]
    }
  }
  // 菜单点击事件
_handleClick = (e) => {
    // this.props.dispatch(clearGformCache2({}))
    hashHistory.push(`/${e.key}`)
  }
  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
 render() {
  const { collapsed } = this.state
  return (
      <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <SwapRightOutlined />
            <Menu theme="dark"  defaultSelectedKeys={['1']} onClick={this._handleClick} mode="inline">
             {this.state.menu.map(item => (
              item.children ? (
              <SubMenu key={item.resKey} icon={<TeamOutlined />} title={item.resName}>
                {item.children.map(chir => (
                <Menu.Item key={chir.resKey}>
                  {item.resName}
                </Menu.Item>))}
              </SubMenu>) 
              : 
              (<Menu.Item key={item.resKey} icon={<PieChartOutlined />}>
                {item.resName}
              </Menu.Item>)
            ))}
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              { this.props.children }
              </div>
            </Content>
          </Layout>
        </Layout>
      // <Layout style={{height:'100%'}}>
      //   <Sider trigger={null} collapsible collapsed={collapsed}>
      //     <div className="logo" />
      //     <Menu
      //       onClick={this._handleClick}
      //       defaultSelectedKeys={['1']}
      //       defaultOpenKeys={['sub1']}
      //       mode="inline"
      //       theme="dark"
      //       inlineCollapsed={collapsed}
      //     >
      //       {this.state.menu.map(item => (
      //         item.children ? (
      //         <SubMenu key={item.resKey} icon={<item.icon />} title={item.resName}>
      //           {item.children.map(chir => (
      //           <Menu.Item key={chir.resKey}>
      //             {item.resName}
      //           </Menu.Item>))}
      //         </SubMenu>) 
      //         : 
      //         (<Menu.Item key={item.resKey} icon={<PieChartOutlined />}>
      //           {item.resName}
      //         </Menu.Item>)
      //       ))}
      //     </Menu>
      //   </Sider>
      //   <Layout className="site-layout">
      //     <Header className="site-layout-background" style={{ padding: 0 }}>
      //     </Header>
      //     <Content
      //       className="site-layout-background"
      //       style={{
      //         margin: '24px 16px',
      //         padding: 24,
      //         minHeight: 280,
      //       }}
      //     >
      //       { this.props.children }
      //     </Content>
      //   </Layout>
      // </Layout>
  );
}
}