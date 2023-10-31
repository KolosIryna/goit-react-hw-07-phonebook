import { useDispatch, useSelector } from 'react-redux';
import { selectorfilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/sliceContacts';

export const Filter = () => {
  const filter = useSelector(selectorfilter);
  const dispatch = useDispatch();

  const handleFilterChange = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <form>
        <input
          type="text"
          placeholder="Search contacts"
          value={filter}
          onChange={handleFilterChange}
          style={{
            padding: '5px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '300px',
          }}
        />
      </form>
    </div>
  );
};
