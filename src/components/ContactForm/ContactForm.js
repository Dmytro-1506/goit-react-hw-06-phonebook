import './ContactForm.css'
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'components/Store/Contacts/actionCreators';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const onSubmitHendler = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name: event.target.name.value,
      number: event.target.number.value
    }
    dispatch(addContact(newContact));
    event.target.reset()
  }

  return <form className='form' onSubmit={(event) => { onSubmitHendler(event) }}>
    <p className='form-title'>Name</p>
    <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
    <p className='form-title'>Number</p>
    <input
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
    />
    <button className='form-btn' type='submit' >Add contact</button>
  </form>
}