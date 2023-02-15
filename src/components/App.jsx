import { Fragment, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import s from './app.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsloading,
} from 'redux/contacts/contacts.selector';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './Layout/Loyout';
import HomePage from 'pages/HomePage/HomePage';
import JoinPage from 'pages/JoinPage/JoinPage';
import LoginPage from 'pages/Login/LoginPage';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <BrowserRouter basename='/goit-react-hw-08-phonebook'>
      
      
      <Suspense fallback={<p>Loading...</p>}> 

      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/register" element={<JoinPage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route> */}
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>    
      
      
      <Fragment>
        <h1 className={s.container}>Phonebook</h1>
        {isLoading && !error && <p>Loading...</p>}
        <ContactForm />

        <h2 className={s.container}>Contacts</h2>
        <Filter />
        {!!contacts && <ContactList />}
      </Fragment>

      </Suspense>
      <ToastContainer />
    </BrowserRouter>
  );
};

// export const App = ()=> {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     if (JSON.parse(localStorage.getItem('contacts'))) {
//       this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   handleAddContact = ({ name, number }) => {
//     this.setState(prevState => ({
//       contacts: [
//         { id: nanoid(), name: name.trim(), number },
//         ...prevState.contacts,
//       ],
//     }));
//   };

//   handleDeleteContact = id => {
//     this.setState(prevState => {
//       return {
//         contacts: prevState.contacts.filter(contact => contact.id !== id),
//       };
//     });
//   };

//   handlerFilter = e => {
//     this.setState({ filter: e.target.value.trim().toLowerCase() });
//   };

//   render() {
//     const { contacts, filter } = this.state;
//     const findedContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter)
//     );

//     return (
//       <Fragment>
//         <h1 className={s.container}>Phonebook</h1>
//         <ContactForm onSubmit={this.handleAddContact} addContact={contacts} />

//         <h2 className={s.container}>Contacts</h2>
//         <Filter value={filter} onChange={this.handlerFilter} />
//         <ContactList
//           contacts={findedContacts}
//           onClick={this.handleDeleteContact}
//         />
//       </Fragment>
//     );
//   }
// }
