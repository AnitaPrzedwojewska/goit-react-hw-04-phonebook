import { nanoid } from 'nanoid';
import css from './contactForm.module.css';
import PropTypes from 'prop-types';

export const ContactForm = ({onFormSubmit}) => {
  const submitForm = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const number = event.target.number.value;
    const newContact = { id: nanoid(), name, number };
    onFormSubmit(newContact);
    event.currentTarget.reset();
  }

  const nameInputId = nanoid();
  const numberInputId = nanoid();
  return (
    <form className={css.FormStyled} onSubmit={submitForm}>
      <div className={css.FormPair}>
        <label className={css.LabelStyled} htmlFor={nameInputId}>Name:</label>
        <input className={css.InputStyled}
          type="text"
          name="name"
          id={nameInputId}
          // pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // pattern="^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={css.FormPair}>
        <label className={css.LabelStyled} htmlFor={numberInputId}>Number:</label>
        <input className={css.InputStyled}
          type="tel"
          name="number"
          id={numberInputId}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button className={css.ButtonStyled} type="submit">Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func
};