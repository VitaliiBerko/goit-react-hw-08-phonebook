import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { ContainerHeader } from 'components/comon.styled';
import { useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/auth/auth.selector';
// import styles from '../AppBar/AppBar.module.css'

export const AppBar = () => {
  const token = useSelector(selectAuthToken);

  return (
    <header>
      <ContainerHeader>
        {/* <div style={styles.containerHeader}> */}
        <Navigation />
        {token ? <UserMenu /> : <AuthNav />}
        {/* </div>        */}
      </ContainerHeader>
    </header>
  );
};