import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/sliceContacts';
import {
  selectorContactsError,
  selectorContactsFilter,
  selectorContactsIsLoading,
} from 'redux/contacts/selectors';
import Loader from 'components/Loader/Loader';

import css from './Contacts.module.css';

export const Contacts = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectorContactsIsLoading);
  const error = useSelector(selectorContactsError);
  const filteredContacts = useSelector(selectorContactsFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <ul>
        {filteredContacts.length > 0 ? (
          filteredContacts.map(contact => (
            <li key={contact.id} className={css.item}>
              {contact.name}: {contact.phone}
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
