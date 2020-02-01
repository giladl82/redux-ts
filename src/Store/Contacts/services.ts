import { Contact, Address } from './types';

export const fetchContacts = async (): Promise<Contact[]> => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => json as Contact[]);
};

export const getFullAddress = (address: Address): string => `${address.street} ${address.suite}, ${address.city}`;
