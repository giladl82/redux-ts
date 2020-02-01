import React, { useState, useEffect } from 'react';
import { List } from 'antd';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../Store';

import ListHeader from './ListHeader';
import ListItem from './ListItem';
import AddTaskModal from './AddTaskModal';

import './Tasks.css';

const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks);

  const [tasksList, setTasksList] = useState(tasks.list);
  const [isNewTaskModalVisible, setIsNewTaskModalVisible] = useState(false);
  const [filter, setFilter] = useState('all');

  const { count, countUnDone, countDone, list, done, unDone } = tasks;

  useEffect(() => {
    switch (filter) {
      case 'all':
        setTasksList(list);
        break;
      case 'done':
        setTasksList(done);
        break;
      case 'todo':
        setTasksList(unDone);
        break;
    }
  }, [count, countUnDone, countDone, list, done, unDone, filter]);

  const handleAddNewTaskClick = () => {
    setIsNewTaskModalVisible(true);
  };

  const handleFilterTasks = (filter: string) => {
    setFilter(filter);
  };

  const handleDeleteTask = (task: Task) => {
    tasks.remove(task);
  };

  return (
    <>
      <AddTaskModal
        isVisible={isNewTaskModalVisible}
        onCancel={() => {
          setIsNewTaskModalVisible(false);
        }}
        onSubmit={values => {
          const task = new Task(values.title, values.description);
          tasks.add(task);
          setIsNewTaskModalVisible(false);
        }}
      />
      <List
        header={<ListHeader onAddNewTask={handleAddNewTaskClick} onFilterTasks={handleFilterTasks} />}
        footer={<div>{`${tasks.countDone} / ${tasks.count}`}</div>}
        bordered
        dataSource={tasksList}
        renderItem={item => (
          <List.Item>
            <ListItem task={item} onDeleteTask={handleDeleteTask} />
          </List.Item>
        )}
      />
    </>
  );
};

export default observer(Tasks);
