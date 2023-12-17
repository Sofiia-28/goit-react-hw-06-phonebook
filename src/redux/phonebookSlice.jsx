import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      const name = {
        ...action.payload,
        id: nanoid(),
      };
      const isExist = state.contacts.find(
        contact => contact.name.toLowerCase() === name.name.toLowerCase()
      );
      if (isExist) {
        alert(`${isExist.name} is already in contacts`);
      } else {
        state.contacts = [...state.contacts, name];
      }
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    onSearch(state, action) {
      state.filter = action.payload;
      state.contacts = state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(state.filter.toLowerCase())
      );
    },
  },
});

export const phonebookReducer = phonebookSlice.reducer;
export const { addContact, deleteContact, onSearch } = phonebookSlice.actions;



