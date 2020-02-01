import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import { ContactsState } from './Contacts/types';
import { TasksState } from './Tasks/types';

export interface RootState {
  contacts: ContactsState;
  tasks: TasksState;
}

export const store = createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);
