import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/auth/auth.selector';

export const AppBar = () => {
  const token = useSelector(selectAuthToken);
  
  return (
    <header>
      <Navigation />
      {token ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
