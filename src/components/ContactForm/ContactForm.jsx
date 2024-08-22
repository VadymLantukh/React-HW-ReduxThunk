import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = { id: nanoid(), ...values };

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  const ContactsSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(3, 'Too Short!')
      .max(50, 'Too Long')
      .required('Required'),
    number: Yup.string()
      .trim()
      .min(3, 'Too Short!')
      .max(50, 'Too Long')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={ContactsSchema}
    >
      <Form className={css.boxContactForm}>
        <div className={css.divForm}>
          <label className={css.divLabel} htmlFor={nameId}>
            Name
          </label>
          <Field type="text" id={nameId} name="name" />
          <ErrorMessage className={css.errorBox} name="name" component="span" />
        </div>

        <div className={css.divForm}>
          <label className={css.divLabel} htmlFor={numberId}>
            Number
          </label>
          <Field type="text" id={numberId} name="number" />
          <ErrorMessage
            className={css.errorBox}
            name="number"
            component="span"
          />
        </div>

        <button className={css.btnContactForm} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
