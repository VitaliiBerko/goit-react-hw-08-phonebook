import { useSelector } from 'react-redux';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { selectContacts, selectFilter } from 'redux/contacts/contacts.selector';
import styles from './contactsList.module.css'
export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const findedContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={styles.list}>
      {findedContacts &&
        findedContacts.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onClick: PropTypes.func.isRequired,
// };
