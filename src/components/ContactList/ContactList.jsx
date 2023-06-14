import PropTypes from 'prop-types';
import {
  ContactsList,
  ConctactListItem,
  DeleteButton,
} from './ContactList.styled';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filtered = useSelector(state => state.filter);
  const dispatch = useDispatch();

const filteredContacts = (() => {
  const normalizedFilter = filtered.toLowerCase();
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
})();
  
  
  return (
    <>
      <ContactsList>
        {filteredContacts.map(contact => (
          <ConctactListItem key={contact.id}>
            {contact.name}: {contact.number}
            <DeleteButton
              type="button"
              onClick={() => {
                dispatch(deleteContact(contact.id));
              }}
            >
              Delete
            </DeleteButton>
          </ConctactListItem>
        ))}
      </ContactsList>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};

export default ContactList;