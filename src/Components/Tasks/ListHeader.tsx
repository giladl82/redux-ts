import React from 'react';
import { Select, Button } from 'antd';

interface HeaderProps {
  onAddNewTask(): void;
  onFilterTasks(filter: string): void;
}

const ListHeader = ({ onAddNewTask, onFilterTasks }: HeaderProps) => {
  const { Option } = Select;
  return (
    <div className="list-header">
      <h1 className="list-header__title">My Tasks</h1>

      <div className="list-header__button">
        <Select defaultValue="all" onChange={onFilterTasks} className="list-header__filters">
          <Option value="all">All</Option>
          <Option value="done">Done</Option>
          <Option value="todo">To do</Option>
        </Select>
        <Button type="primary" icon="plus" onClick={onAddNewTask} className="list-header__buttons">
          Add Task
        </Button>
      </div>
    </div>
  );
};

export default ListHeader;
