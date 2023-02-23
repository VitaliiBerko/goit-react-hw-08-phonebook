import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { ContainerHeader, ShadowBottom } from 'components/comon.styled';
import { useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/auth/auth.selector';
// import styles from '../AppBar/AppBar.module.css'

export const AppBar = () => {
  const token = useSelector(selectAuthToken);

  return (
    <header className="pb-4" >
      <ShadowBottom>
        <ContainerHeader>
          <Navigation />
          {token ? <UserMenu /> : <AuthNav />}
        </ContainerHeader>
      </ShadowBottom>
    </header>
  );
};
