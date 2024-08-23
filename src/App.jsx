import css from './App.module.css';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from './redux/contactsOps';
import { selectError, selectLoading } from './redux/selectors';
import { SkewLoader } from 'react-spinners';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      <h1 className={css.appTitle}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && (
        <div className={css.loading}>
          <SkewLoader color="#fafafa" />
        </div>
      )}
      {isError ? (
        <p className={css.error}>Server error. Please try again later.</p>
      ) : (
        <ContactList />
      )}
    </>
  );
}

export default App;
