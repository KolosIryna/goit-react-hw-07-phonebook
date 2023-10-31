import { PhoneForm } from './PhoneForm/PhoneForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <div className={css.appstyled}>
        <PhoneForm />
        <h2 className={css.text}>Contacts</h2>
        <Filter />
        <Contacts />
      </div>
    </div>
  );
};
