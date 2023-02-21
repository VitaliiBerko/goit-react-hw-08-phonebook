import { StyledNavLink } from 'components/Layout/layout.styled';
import { useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/auth/auth.selector';

export const Navigation = () => {
  const token = useSelector(selectAuthToken);
 
  return (
    <nav>
      <ul>
        <li>
          <StyledNavLink
            to="/"
            // className={css.link}
            // style={({ isActive }) => (isActive ? aciveStyle : null)}
          >
            Home
          </StyledNavLink>
        </li>
        <li>
          {token && (
            <StyledNavLink
              to="/contacts"
              // className={css.link}
              // style={({ isActive }) => (isActive ? aciveStyle : null)}
            >
              Contacts
            </StyledNavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};
