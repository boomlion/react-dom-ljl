import React, { Component } from 'react'
import { Button, Modal, Form, Radio, Input, Select, InputNumber } from 'antd'
import style from './form.module.scss'
const { Option } = Select;
const { TextArea } = Input
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
class subForm extends Component {
  constructor(props){
    super(props)
  }
  state = { 
    loading: false,
    visible: false,
    positionList: [
      { name: '项目经理', id: 1 },
      { name: '开发', id: 2 },
      { name: '测试', id: 3 },
      { name: '运维', id: 4 },
      { name: '产品经理', id: 5 },
      { name: 'DB', id: 6 }
    ]
   }
  formRef = React.createRef()
  onFinish = values => {
    console.log(values)
  };
  componentWillMount() {
    // console.log(Form.useForm(), 'Form.useForm')
  }
  oneClick(e) {
    this.setState({ visible: true, visible: true })
  }
  handleCancel= () => {
    this.formRef.current.resetFields();
    this.setState({ visible: false, visible: false })
  }
  handleOk=() => {
    this.formRef.current.validateFields().then(res => {
      console.log(res, 'dd')
    })
    // this.formRef.current
  }
  render() { 
    const { visible, loading } = this.state
    // const { getFieldDecorator } = this.form.
    return ( 
      <div>
        <Button type="primary" onClick={(e) => this.oneClick(e)} ghost>
          创建
        </Button>
        <Modal
          visible={visible}
          title="新增员工信息"
          width="40%"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              取消
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              提交
            </Button>,
          ]}
        >
          <Form {...layout} ref={this.formRef} initialValues={{gender: 'man'}} className={style.formstyle} name="control-ref" onFinish={this.onFinish}>
            <Form.Item
              name="name"
              label="姓名"
              rules={[
                {
                  required: true,
                  message: '请输入相关姓名！'
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="gender"
              label="性别"
              rules={[{
                required: true
              }]}
            >
            <Radio.Group>
              <Radio value="man">先生</Radio>
              <Radio value="wuman">女士</Radio>
            </Radio.Group>
            </Form.Item>
            <Form.Item
              name="position"
              label="职位"
              rules={[
                {
                  required: true,
                  message: '请选择适配职位！',
                }
              ]}
            >
              <Select style={{ width: '100%' }}>
                { this.state.positionList.map(item => 
                   (<Option value={ item.name } key={ item.id }>{ item.name }</Option>)
                ) }
                
              </Select>
            </Form.Item>
            <Form.Item
              name="age"
              label="年龄"
              rules={[
                {
                  required: true,
                  message: '请输入年龄'
                }
              ]}
            >
              <InputNumber style={{ width: '100%' }} min={1} />
            </Form.Item>
            <Form.Item
              name="school"
              label="毕业学校"
              rules={[
                {
                  max: 12,
                  required: true,
                  message: '长度限制在12之内可以吧！',
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="education"
              label="教育经历"
              rules={[
                {
                  max: 64,
                  required: true,
                  message: '长度限制在64之内可以吧！',
                }
              ]}
            >
              <TextArea
                placeholder="请输入教育经历"
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
            </Form.Item>
            <Form.Item
              name="address"
              label="地址"
              rules={[
                {
                  max: 64,
                  required: true,
                  message: '长度限制在64之内可以吧！',
                }
              ]}
            >
              <TextArea
                placeholder="请输入现居住地址"
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
            </Form.Item>
            {/* <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
              <Button htmlType="button" onClick={this.onReset}>
                重置
              </Button>
            </Form.Item> */}
          </Form>
        </Modal>
      </div>
     )
  }
}

export default subForm;