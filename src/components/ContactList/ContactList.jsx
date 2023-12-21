import { Wrapper, Button } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectedContacts, selectedFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/phonebookSlice';

export const ContactList = () => {
  const contacts = useSelector(selectedContacts);
  const filter = useSelector(selectedFilter);
  const filteredContacts = contacts.filter(contact => {
    const hasName = contact.name.toLowerCase().includes(filter.toLowerCase());
    return hasName;
  });
  const dispatch = useDispatch();
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Wrapper key={id}>
            <li>
              {name}: {number}
            </li>
            <Button onClick={() => dispatch(deleteContact(id))} type="button">
              Delete
            </Button>
          </Wrapper>
        );
      })}
    </ul>
  );
};
