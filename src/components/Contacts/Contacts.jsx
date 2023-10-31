import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/sliceContacts';
import {
  selectorContacts,
  selectorContactsError,
  selectorContactsFilter,
  selectorContactsIsLoading,
} from 'redux/contacts/selectors';
import Loader from 'components/Loader/Loader';

import css from './Contacts.module.css';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);
  const isLoading = useSelector(selectorContactsIsLoading);
  const error = useSelector(selectorContactsError);
  const filter = useSelector(selectorContactsFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const getFilteredContacts = contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <div>
      <ul>
        {getFilteredContacts.length > 0 ? (
          getFilteredContacts.map(contact => (
            <li key={contact.id} className={css.item}>
              {contact.name}: {contact.number}
              <button
                className={css.button}
                onClick={() => handleDeleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>No contacts found</p>
        )}
      </ul>

      {isLoading && <Loader />}
      {error && <p>Oppsss Erorr</p>}
    </div>
  );
};
