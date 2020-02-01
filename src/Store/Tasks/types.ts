export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export const GET_ALL_TASKS = 'GET_ALL_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_IS_DONE = 'TOGGLE_IS_DONE';
export const DELETE_TASK = 'DELETE_DONE';

export interface TasksState {
  list: Task[];
}

interface getAllTasksAction {
  type: typeof GET_ALL_TASKS;
  tasks: Task[];
}

interface toggleCompletedAction {
  type: typeof TOGGLE_IS_DONE;
  taskId: string;
  completed: boolean;
}

interface deleteTaskAction {
  type: typeof DELETE_TASK;
  task: Task;
}

export type TaskActionTypes = getAllTasksAction | toggleCompletedAction | deleteTaskAction;
