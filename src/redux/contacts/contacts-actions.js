import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContacts = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContacts = createAction('contacts/delete');

const changeFilter = createAction('contacts/changeFilter');

const numberContact = { addContacts, deleteContacts, changeFilter };
export default numberContact;
