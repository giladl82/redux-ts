import { Task, TasksState, TaskActionTypes, ADD_TASK, GET_ALL_TASKS, TOGGLE_IS_COMPETED, DELETE_TASK } from './types';

const initialState: TasksState = {
  list: []
};

export const reducer = (state = initialState, action: TaskActionTypes): TasksState => {
  switch (action.type) {
    case GET_ALL_TASKS:
      return { ...state, list: action.tasks };
    case ADD_TASK:
    return {...state, list: [...state.list, action.task]}
    case DELETE_TASK:
      const filteredList = state.list.filter((task: Task) => task.id !== action.task.id);
      return { ...state, list: filteredList };
    case TOGGLE_IS_COMPETED: {
      const taskIndex = state.list.findIndex((task: Task) => task.id === action.taskId);
      if (taskIndex > -1) {
        const updatedTask = { ...state.list[taskIndex] };
        updatedTask.completed = action.completed;
        const updatedList: Task[] = [...state.list.slice(0, taskIndex), updatedTask, ...state.list.slice(taskIndex + 1)];
        return { ...state, list: updatedList };
      }

      return state;
    }
    default:
      return state;
  }
};
