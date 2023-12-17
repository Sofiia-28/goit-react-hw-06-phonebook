import { ContactsForm } from '../ContactsForm/ContactsForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Wrapper } from './App.styled';

export const App = () => {
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactsForm  />
      <h2>Contacts</h2>
      <Filter/>
      <ContactList />
    </Wrapper>
  );
};
