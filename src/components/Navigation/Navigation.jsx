import { StyledNavLink } from 'components/Layout/layout.styled';
import { useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/auth/auth.selector';
import styles from '../common.module.css';

export const Navigation = () => {
  const token = useSelector(selectAuthToken);

  return (
    <nav>
      <ul className={styles.menu}>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          {token && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
        </li>
      </ul>
    </nav>
  );
};
