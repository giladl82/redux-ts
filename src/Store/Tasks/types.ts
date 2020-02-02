export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export const GET_ALL_TASKS = 'GET_ALL_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_IS_COMPETED = 'TOGGLE_IS_COMPETED';
export const DELETE_TASK = 'DELETE_DONE';

export interface TasksState {
  list: Task[];
}

export interface AddTaskAction {
  type: typeof ADD_TASK;
  task: Task;
}

export interface GetAllTasksAction {
  type: typeof GET_ALL_TASKS;
  tasks: Task[];
}

export interface ToggleCompletedAction {
  type: typeof TOGGLE_IS_COMPETED;
  taskId: string;
  completed: boolean;
}

export interface DeleteTaskAction {
  type: typeof DELETE_TASK;
  task: Task;
}

export type TaskActionTypes = GetAllTasksAction | AddTaskAction | ToggleCompletedAction | DeleteTaskAction;
