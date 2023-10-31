import { createSelector } from '@reduxjs/toolkit';

const selectContactsStore = state => state.contacts;

export const selectorContacts = createSelector(
  [selectContactsStore],
  contacts => contacts.contacts.items
);

export const selectorContactsIsLoading = createSelector(
  [selectContactsStore],
  contacts => contacts.contacts.isLoading
);

export const selectorContactsError = createSelector(
  [selectContactsStore],
  contacts => contacts.contacts.error
);

export const selectorContactsFilter = createSelector(
  [selectContactsStore],
  contacts => contacts.filter
);
