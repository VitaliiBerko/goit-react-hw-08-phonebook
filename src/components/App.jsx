import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';

import { PrivateRoute } from './AuthRouts/PrivateRoute';
import { PublicRoute } from './AuthRouts/PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/auth.selector';
import { refreshUser } from 'redux/auth/auth.operation';

import Layout from './Layout/Loyout';
import Loader from './Loader/loader';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const JoinPage = lazy(() => import('pages/JoinPage/JoinPage'));
const LoginPage = lazy(() => import('pages/Login/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  // const token = useSelector(selectAuthToken);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // useEffect(()=>{
  //   dispatch(refreshUser())
  // }, [dispatch, token])

  return isRefreshing ? (
    <Loader/>
  ) : (
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="" element={<PublicRoute />}>
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
