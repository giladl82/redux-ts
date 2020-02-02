import { Task } from './types';

export const fetchTasks = async (): Promise<Task[]> => {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => (json as Task[]).slice(0, 10));
};

export const createTask = async (task: Task): Promise<Task> => {
  return Promise.resolve(task);
};

export const updateTask = async (task: Task): Promise<Task> => {
  return Promise.resolve(task);
};


export const deleteTask = async (task: Task): Promise<Task> => {
  return Promise.resolve(task);
};

