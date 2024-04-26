import { nanoid } from 'nanoid';
import { FormStyled, FormPair, LabelStyled, InputStyled, ButtonStyled } from './contactForm.styled';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactForm extends Component {

  submitForm = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const number = event.target.number.value;
    const newContact = { id: nanoid(), name, number };
    this.props.onFormSubmit(newContact);
    event.currentTarget.reset();
  }

  render() {
    const nameInputId = nanoid();
    const numberInputId = nanoid();
    return (
      <FormStyled onSubmit={this.submitForm}>
        <FormPair>
          <LabelStyled htmlFor={nameInputId}>Name:</LabelStyled>
          <InputStyled
            type="text"
            name="name"
            id={nameInputId}
            // pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // pattern="^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormPair>
        <FormPair>
          <LabelStyled htmlFor={numberInputId}>Number:</LabelStyled>
          <InputStyled
            type="tel"
            name="number"
            id={numberInputId}
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormPair>
        <ButtonStyled type="submit">Add contact</ButtonStyled>
      </FormStyled>
    );
  };
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string
};