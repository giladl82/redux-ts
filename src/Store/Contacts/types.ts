export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: number;
  lng: number;
}

export interface Contact {
  id: string;
  avatar: string;
  name: string;
  address: Address;
  phone: string;
}

export const GET_ALL_CONTACTS = 'GET_ALL_CONTACTS';
export const ADD_CONTACT = 'ADD_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';

export interface ContactsState {
  list: Contact[];
}

interface getAllContactAction {
  type: typeof GET_ALL_CONTACTS;
  contacts: Contact[];
}

interface addContactActions {
  type: typeof ADD_CONTACT;
  contact: Contact;
}

interface removeContactAction {
  type: typeof REMOVE_CONTACT;
  contact: Contact;
}

export type ContactActionTypes = getAllContactAction | addContactActions | removeContactAction;
