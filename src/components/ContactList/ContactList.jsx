import PropTypes from 'prop-types';
import './ContactList.scss';
import { deleteContacts } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filters.filter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className="ContactList">
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className="ContactList__item">
          <p className="ContactList__text">{name}:</p>
          <span className="ContactList__span">{number}</span>
          <button
            type="button"
            className="ContactList__btn"
            onClick={() => dispatch(deleteContacts(id))}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.protoType = {
  contacts: PropTypes.object.isRequired,
  onContactsDelete: PropTypes.func.isRequired,
};
