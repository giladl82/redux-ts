import { ContactsState, GET_ALL_CONTACTS, ContactActionTypes } from './types';

const initialState: ContactsState = {
  list: []
};

export const reducer = (state = initialState, action: ContactActionTypes) => {
  switch (action.type) {
    case GET_ALL_CONTACTS:
      return { ...state, list: action.contacts };
    default:
      return state;
  }
};
