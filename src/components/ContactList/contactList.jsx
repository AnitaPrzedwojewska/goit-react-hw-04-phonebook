import { Contacts, Contact, ButtonStyled } from './contactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, filter, onFilterChange, onDeleteContact }) => {
  const filteredContacts = onFilterChange();
  return (
    <Contacts>
      {filteredContacts.map(contact => (
        <Contact key={contact.id}>
          {contact.name}, {contact.number}
          <ButtonStyled type="button" name={contact.id} onClick={onDeleteContact}>
            Delete
          </ButtonStyled>
        </Contact>
      ))}
    </Contacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired
};