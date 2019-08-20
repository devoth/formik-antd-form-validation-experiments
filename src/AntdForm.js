import React from 'react'
import { Input, Form, Button, InputNumber } from 'antd'

import 'antd/dist/antd.css'

const AntdForm = ({ form }) => {
  const { getFieldDecorator } = form
  const handleSubmit = e => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      } else {
        console.log('got me some errors', err)
      }
    })
  }

  const fieldLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
  }
  const buttonLayout = {
    wrapperCol: { span: 14, offset: 4 },
  }

  return (
    <Form onSubmit={handleSubmit} layout="horizontal">
      <h2>AntdForm</h2>
      <Form.Item label="User Name" {...fieldLayout}>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(<Input placeholder="Say my name" />)}
      </Form.Item>
      <Form.Item label="Age" {...fieldLayout}>
        {getFieldDecorator('age', {
          rules: [
            { required: true, message: 'Please input your age!' },
            {
              type: 'number',
              min: 18,
              message: 'Government says you need to be older…',
            },
          ],
        })(<InputNumber placeholder="type your age" />)}
      </Form.Item>
      <Form.Item {...buttonLayout}>
        <Button type="primary" htmlType="submit">
          submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Form.create({ name: 'antd_form' })(AntdForm)
