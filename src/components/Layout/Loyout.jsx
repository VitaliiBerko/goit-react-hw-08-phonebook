import { Outlet } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import css from './layout.module.css';
import { Nav, StyledNavLink } from './layout.styled';

// const aciveStyle = {
//   color: 'tomato',
// };

const Layout = () => {
  return (
    <div>
      <header>
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
      </main>
    </div>
  );
};

export default Layout;
