import { RiContactsFill } from 'react-icons/ri';
import { MdCall } from 'react-icons/md';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactsThunk } from '../../redux/contactsOps';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.divContact}>
      <div className={css.userContact}>
        <p className={css.contactInfo}>
          <RiContactsFill className={css.conReact} />
          {name}
        </p>

        <p className={css.contactInfo}>
          <MdCall className={css.conReact} />
          {number}
        </p>
      </div>

      <button
        className={css.btnDeleteItem}
        type="button"
        onClick={() => dispatch(deleteContactsThunk(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
