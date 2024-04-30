import css from './contactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => {
  // console.log('ContactList contacts: ', contacts);
  console.log('length: ', contacts.length);
  return (
    <>
      {contacts.length == 0 ? (
        <p className={css.Info}>There are no matching contacts</p>
      ) : (
        <ul className={css.Contacts}>
          {contacts.map(({ id, name, number }) => (
            <li className={css.Contact} key={id}>
              {name}, {number}
              <button
                className={css.DeleteButton}
                type='button'
                onClick={() => {
                  onDeleteContact(id);
                }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  // contacts: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //     name: PropTypes.string.isRequired,
  //     number: PropTypes.string.isRequired,
  //   })
  // ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};