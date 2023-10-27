import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';

import AuthState from '../../dtos/AuthState';
import User from '../../dtos/User';
import ApiData from '../../dtos/ApiData';

const withAuthAdmin = (Component) => {
  const Auth = (props) => {
    const router = useRouter();
    const loggedUser: User = useSelector((state: AuthState) => state.auth.loggedUser);
    
    const apiDataCookie = Cookie.get('@api-data');
    const apiData: ApiData = apiDataCookie ? JSON.parse(apiDataCookie) : null;

    if (!loggedUser || 
        loggedUser.profile !== 'admin' 
        // !apiData ||
        // !apiData['access-token'] ||
        // apiData['aceess-token'] === ''
    ) {
      router.push('/Auth/Login')
    }

    return <Component {...props} />;
  }


  if(Component.getServerSideProps) {
    Auth.getServerSideProps = Component.getServerSideProps;
  }

  return Auth;
}

export default withAuthAdmin;