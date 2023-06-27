import { Outlet } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import css from './layout.module.css';
// import { Nav, StyledNavLink } from './layout.styled';
import { Fragment, Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import Loader from 'components/Loader/loader';

// const aciveStyle = {
//   color: 'tomato',
// };

const Layout = () => {
  return (
    <Fragment>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {/* <header>
        <Nav>
          <StyledNavLink
            to="/"
            // className={css.link}
            // style={({ isActive }) => (isActive ? aciveStyle : null)}
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            to="/register"
            // className={css.link}
            // style={({ isActive }) => (isActive ? aciveStyle : null)}
          >
            Join
          </StyledNavLink>
          <StyledNavLink
            to="/login"
            // className={css.link}
            // style={({ isActive }) => (isActive ? aciveStyle : null)}
          >
            Login
          </StyledNavLink>
        </Nav>
      </header>
      <main>
        <Outlet />
      </main> */}
    </Fragment>
  );
};

export default Layout;
