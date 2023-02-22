import { useEffect } from 'react';
import styles from '../../components/common.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsloading,
} from 'redux/contacts/contacts.selector';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import clsx from 'clsx';

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <div className={clsx(styles.container)}>
      <h1 className={clsx(styles.textCentr)}>Phonebook</h1>
      {isLoading && !error && <p className={clsx(styles.textCentr)}>Loading...</p>}
      <ContactForm  />

      <h2 className={clsx(styles.textCentr)}>Contacts</h2>
      <Filter  />
      {!!contacts && <ContactList />}
    </div>
  );
};

export default ContactsPage;
