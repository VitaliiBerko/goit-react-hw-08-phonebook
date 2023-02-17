// import { Fragment, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { useDispatch,} from 'react-redux';
// import { fetchContacts } from 'redux/contacts/operations';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './Layout/Loyout';
import HomePage from 'pages/HomePage/HomePage';
import JoinPage from 'pages/JoinPage/JoinPage';
import LoginPage from 'pages/Login/LoginPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import { PrivateRoute } from './AuthRouts/PrivateRoute';

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
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
            <Route path="" element={<PrivateRoute />}>
              <Route path="/contacts" element={<ContactsPage />}></Route>
            </Route>

            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
      {/* <ToastContainer /> */}
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
