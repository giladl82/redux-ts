import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

import {
  ADD_TASK,
  DELETE_TASK,
  GET_ALL_TASKS,
  TOGGLE_IS_COMPETED,
  Task,
  TasksState,
  GetAllTasksAction,
  ToggleCompletedAction,
  AddTaskAction,
  DeleteTaskAction
} from './types';
import { fetchTasks, createTask, updateTask, deleteTask } from './services';

export const getAllTasks = (): ThunkAction<Promise<Task[]>, TasksState, {}, AnyAction> => async (
  dispatch: ThunkDispatch<TasksState, {}, AnyAction>
): Promise<Task[]> => {
  const tasks: Task[] = await fetchTasks();
  const action: GetAllTasksAction = {
    type: GET_ALL_TASKS,
    tasks
  };
  dispatch(action);

  return tasks;
};

export const addTask = (task: Task): ThunkAction<void, TasksState, {}, AnyAction> => async (
  dispatch: ThunkDispatch<TasksState, {}, AnyAction>
): Promise<void> => {
  await createTask(task);

  const action: AddTaskAction = {
    type: ADD_TASK,
    task
  };

  dispatch(action);
};

export const removeTask = (task: Task): ThunkAction<void, TasksState, {}, AnyAction> => async (
  dispatch: ThunkDispatch<TasksState, {}, AnyAction>
): Promise<void> => {
  await deleteTask(task);
  const action: DeleteTaskAction = {
    type: DELETE_TASK,
    task
  };

  dispatch(action);
};

export const toggleTaskCompleted = (task: Task): ThunkAction<void, TasksState, {}, AnyAction> => async (
  dispatch: ThunkDispatch<TasksState, {}, AnyAction>
): Promise<void> => {
  await updateTask(task);

  const action: ToggleCompletedAction = {
    type: TOGGLE_IS_COMPETED,
    taskId: task.id,
    completed: !task.completed
  };

  dispatch(action);
};
