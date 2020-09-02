import React, { Component } from 'react'
import { Button, Table } from 'antd'
import style from './index.module.scss'
import Dialog from './module/dialog'
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
]
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: '年龄',
    dataIndex: 'age',
  },
  {
    title: '毕业院校',
    dataIndex: 'school'
  },
  {
    title: '性别',
    dataIndex: 'gender'
  },
  {
    title: '地址',
    dataIndex: 'address',
  },
]
class subForm extends Component {
  constructor(props){
    super(props)
  }
  state = {
    
   }
   dialogRef = React.createRef()
  componentWillMount() {
    // console.log(Form.useForm(), 'Form.useForm')
  }
  oneClick() {
    this.dialogRef.current.openModel()
  }
  
  render() { 
    const { visible, loading } = this.state
    // const { getFieldDecorator } = this.form.
    return ( 
      <div>
        <Button type="primary" onClick={() => this.oneClick()} ghost>
          创建
        </Button>
        <Dialog ref={this.dialogRef} />
        <Table
        style={{marginTop: '20px'}}
        columns={columns}
        dataSource={data}
      />
      </div>
     )
  }
}

export default subForm;