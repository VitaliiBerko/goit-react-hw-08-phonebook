import { StyledNavLink } from 'components/Layout/layout.styled';
import { useLocation } from 'react-router-dom';
import styles from '../AuthNav/AuthNav.module.css';

export const AuthNav = () => {
  const location = useLocation();

  return (
    <ul className={styles.listAuthNav}>
      <li>
        <StyledNavLink to="/register" state={{ from: location }}>
          Join
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/login" state={{ from: location }}>
          Login
        </StyledNavLink>
      </li>
    </ul>
  );
};
