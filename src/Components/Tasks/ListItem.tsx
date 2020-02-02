import React from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Icon, Button } from 'antd';

import { Task } from '../../Store/Tasks/types';
import { toggleTaskCompleted } from '../../Store/Tasks/actions';

interface Props {
  task: Task;
  onDeleteTask(task: Task): void;
}

const TaskListItem = ({ task, onDeleteTask }: Props) => {
  const itemCss = ['task-item', task.completed && 'task-item--done'].join(' ');

  const handleDeleteTask = () => {
    onDeleteTask(task);
  };

  const dispatch = useDispatch();

  return (
    <div className={itemCss}>
      <div className="task-item__data">
        <div className="task-item__title">{task.title}</div>
      </div>
      <Button className="task-item__delete" icon="delete" type="link" onClick={handleDeleteTask}></Button>
      <Switch
        className="task-item__switch"
        onChange={() => {
          dispatch(toggleTaskCompleted(task));
        }}
        checkedChildren={<Icon type="check" />}
        unCheckedChildren={<Icon type="close" />}
        defaultChecked={task.completed}
      />
    </div>
  );
};

export default TaskListItem;
