import { Fragment, useEffect } from 'react';
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

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <Fragment>
      <h1 className={styles.container}>Phonebook</h1>
      {isLoading && !error && <p>Loading...</p>}
      <ContactForm />

      <h2 className={styles.container}>Contacts</h2>
      <Filter />
      {!!contacts && <ContactList />}
    </Fragment>
  );
};

export default ContactsPage;
