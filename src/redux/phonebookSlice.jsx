import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: {
      prepare(contacts) {
        return {
          payload: {
            ...contacts,
            id: nanoid(),
          },
        };
      },
      reducer(state, action) {
        state.contacts = [...state.contacts, action.payload];
      },
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    onSearch(state, action) {
      state.filter = action.payload;
    },
  },
});

export const phonebookReducer = phonebookSlice.reducer;
export const { addContact, deleteContact, onSearch } = phonebookSlice.actions;
