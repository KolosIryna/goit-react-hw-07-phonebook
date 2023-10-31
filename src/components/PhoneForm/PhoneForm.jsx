import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/sliceContacts';
import { selectorContacts } from 'redux/contacts/selectors';

import css from './PhoneForm.module.css';

export const PhoneForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;

    const isNameExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isNameExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      name,
      number,
    };

    dispatch(addContact(newContact));
    event.currentTarget.reset();
  };

  return (
    <div className={css.phoneform}>
      <h1 className={css.text}>Phonebook</h1>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          <span className={css.title}>Name</span>
          <input
            className={css.input}
            name="name"
            type="text"
            required
            placeholder="Enter name"
          />
          <span className={css.title}>Number</span>
          <input
            className={css.input}
            type="tel"
            name="number"
            required
            placeholder="Number"
            minLength="7"
            maxLength="12"
          />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
