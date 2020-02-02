import { Contact, Address } from './types';

export const fetchContacts = async (): Promise<Contact[]> => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => (json as Contact[]).slice(0, 10));
};

export const getFullAddress = (address: Address): string => `${address.street} ${address.suite}, ${address.city}`;
