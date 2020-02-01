import { Contact, GET_ALL_CONTACTS } from './types';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchContacts } from './services';

export const getAllContacts = (): ThunkAction<Promise<Contact[]>, {}, {}, AnyAction> => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
): Promise<Contact[]> => {
  const contacts: Contact[] = await fetchContacts();
  dispatch({
    type: GET_ALL_CONTACTS,
    contacts
  });

  return contacts;
};
