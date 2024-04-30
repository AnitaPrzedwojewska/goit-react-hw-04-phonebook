import { nanoid } from 'nanoid';
import css from './contactForm.module.css';
import PropTypes from 'prop-types';

export const ContactForm = ({ onFormSubmit }) => {

  const regexpName = new RegExp(
    "^[a-zA-Z]+(([' -][a-zA-Z])?[a-zA-Z]*)*$"
  );
  const regexpNumber = new RegExp("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$");

  const submitContact = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const number = event.target.number.value;
    if (name.trim() === '' || number.trim() === "") {
      alert("Name and number must be completed");
      return;
    }
    if (!regexpName.test(name)) {
      alert(
        "The name is not correct. Name may contain only letters, apostrophe, dash and spaces."
      );
      return;
    }
    if (!regexpNumber.test(number)) {
      alert(
        "The number is not correct. Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      );
    return;
    }
    const newContact = { id: nanoid(), name, number };
    console.log('submitContact - newContact: ', newContact);
    onFormSubmit(newContact);
    event.currentTarget.reset();
  }

  const nameInputId = nanoid();
  const numberInputId = nanoid();
  return (
    <form className={css.newContactForm} onSubmit={submitContact}>
      <div className={css.FormPair}>
        <label className={css.FormLabel} htmlFor={nameInputId}>
          Name:
        </label>
        <input
          className={css.FormInput}
          type='text'
          name='name'
          id={nameInputId}
          placeholder='enter the name'
          // pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // pattern="^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={css.FormPair}>
        <label className={css.FormLabel} htmlFor={numberInputId}>
          Number:
        </label>
        <input
          className={css.FormInput}
          type='tel'
          name='number'
          id={numberInputId}
          placeholder='enter the phone number'
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          required
        />
      </div>
      <button className={css.FormButton} type='submit'>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func
};