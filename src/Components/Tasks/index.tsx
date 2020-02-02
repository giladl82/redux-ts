import React, { useState, useEffect, useMemo } from 'react';
import { List } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../Store';

import ListHeader from './ListHeader';
import ListItem from './ListItem';
import AddTaskModal from './AddTaskModal';

import './Tasks.css';
import { getAllTasks, addTask, removeTask } from '../../Store/Tasks/actions';
import { Task } from '../../Store/Tasks/types';

const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.list);
  const [tasksList, setTasksList] = useState(tasks);
  const [isNewTaskModalVisible, setIsNewTaskModalVisible] = useState(false);
  const [filter, setFilter] = useState('all');
  const completedCount = useMemo(() => tasks.filter(task => task.completed).length, [tasks]);

  // const { count, countUnDone, countDone, list, done, unDone } = tasks;

  useEffect(() => {
    dispatch(getAllTasks());
  }, []);

  useEffect(() => {
    switch (filter) {
      case 'all':
        setTasksList(tasks);
        break;
      case 'done':
        setTasksList(tasks.filter(task => task.completed));
        break;
      case 'todo':
        setTasksList(tasks.filter(task => !task.completed));
        break;
    }
  }, [filter, tasks]);

  const handleAddNewTaskClick = () => {
    setIsNewTaskModalVisible(true);
  };

  const handleFilterTasks = (filter: string) => {
    setFilter(filter);
  };

  const handleDeleteTask = (task: Task) => {
    dispatch(removeTask(task));
  };

  return (
    <>
      <AddTaskModal
        isVisible={isNewTaskModalVisible}
        onCancel={() => {
          setIsNewTaskModalVisible(false);
        }}
        onSubmit={values => {
          const task: Task = {
            id: Date.now().toString(),
            title: values.title,
            completed: false
          };

          dispatch(addTask(task));
          setIsNewTaskModalVisible(false);
        }}
      />
      <List
        header={<ListHeader onAddNewTask={handleAddNewTaskClick} onFilterTasks={handleFilterTasks} />}
        footer={<div>{`${completedCount} / ${tasks.length}`}</div>}
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

export default Tasks;
