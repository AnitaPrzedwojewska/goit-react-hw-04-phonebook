import css from './contactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.Contacts}>
      {contacts.map(contact => (
        <li className={css.Contact} key={contact.id}>
          {contact.name}, {contact.number}
          <button className={css.ButtonStyled} type="button" name={contact.id} onClick={onDeleteContact}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf().isRequired,
  onDeleteContact: PropTypes.func.isRequired
};