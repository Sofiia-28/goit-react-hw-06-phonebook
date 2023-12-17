import { Wrapper, Button } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/phonebookSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.phonebook.contacts);
  const dispatch = useDispatch();
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
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
