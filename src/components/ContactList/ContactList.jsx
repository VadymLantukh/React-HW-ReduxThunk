import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/selectors';

const ContactList = () => {
  const filteredContacs = useSelector(selectFilteredContacts);

  return (
    <ul className={css.constactList}>
      {filteredContacs.map(contact => {
        return (
          <li className={css.contactItem} key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
