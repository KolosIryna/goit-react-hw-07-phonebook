import { createSelector } from '@reduxjs/toolkit';

const selectContactsStore = state => state.contactsStore;

export const selectorContacts = createSelector(
  [selectContactsStore],
  contactsStore => contactsStore.contacts.items
);

export const selectorContactsIsLoading = createSelector(
  [selectContactsStore],
  contactsStore => contactsStore.contacts.isLoading
);

export const selectorContactsError = createSelector(
  [selectContactsStore],
  contactsStore => contactsStore.contacts.error
);

export const selectorContactsFilter = createSelector(
  [selectContactsStore],
  contactsStore => contactsStore.filter
);
