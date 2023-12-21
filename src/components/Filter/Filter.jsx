import { Wrapper, Field } from './Filter.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectedFilter } from '../../redux/selectors';
import { onSearch } from '../../redux/phonebookSlice';

export const Filter = () => {
  const filter = useSelector(selectedFilter);
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
