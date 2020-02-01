import React from 'react';
import { Modal, Button, Form, Input } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

interface AddTaskProps extends FormComponentProps {
  onCancel(): void;
  onSubmit(values: any): void;
  isVisible: boolean;
}

const AddModalTask = (props: AddTaskProps) => {
  const { onCancel, onSubmit, isVisible } = props;

  const handleSubmit = (event: any) => {
    event.preventDefault();

    props.form.validateFields((err, values) => {
      if (!err) {
        onSubmit(values);
        props.form.resetFields();
      }
    });
  };

  const { getFieldDecorator } = props.form;

  return (
    <Modal visible={isVisible} title="Add new task" onCancel={onCancel} footer={null}>
      <h1>Add new task</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Item label="Title">
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please enter task title!' }]
          })(<Input placeholder="Task title" id="title" name="title" />)}
        </Form.Item>
        <Form.Item label="Description">
          {getFieldDecorator('description', {
            rules: [{ required: true, message: 'Please enter task description!' }]
          })(<Input placeholder="Task description" id="description" name="description" />)}
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Form.create<AddTaskProps>()(AddModalTask);
