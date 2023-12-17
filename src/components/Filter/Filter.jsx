import { Wrapper, Field } from './Filter.styled';
// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { onSearch } from '../../redux/phonebookSlice';

export const Filter = ({ filter }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <label>Find contacts by name</label>
      <Field
        type="search"
        value={filter}
        onChange={evt => dispatch(onSearch(evt.target.value))}
      />
    </Wrapper>
  );
};
