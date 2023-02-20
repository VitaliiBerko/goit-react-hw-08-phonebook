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
import { PublicRoute } from './AuthRouts/PublicRoute';

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='' element= {<PublicRoute />}>
              <Route path="/register" element={<JoinPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>
            
            <Route path="" element={<PrivateRoute />}>
              <Route path="/contacts" element={<ContactsPage />}></Route>
            </Route>

            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
     </BrowserRouter>
  );
};

 