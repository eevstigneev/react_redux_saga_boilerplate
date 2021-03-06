import React, {useEffect, useMemo} from 'react';
import {ROUTES} from 'src/routes';
import {useLocation, useNavigate} from 'react-router';
import {login, useAuthAction, useAuthStore} from 'src/store/auth/auth.actions';
import {isExpiredToken} from 'src/utils/storage/storage.token';
import Form from './Form';

const Page: React.FC = () => {
  const location = useLocation();
  const navigator = useNavigate();
  const {isFetching, ...auth} = useAuthStore();
  const handleLogin = useAuthAction(login);
  const isAuthenticated = useMemo(() => auth?.token && !isExpiredToken(auth.token) && auth?.roles, [
    auth.roles,
    auth.token,
  ]);

  const toLocation = useMemo(() => {
    const state = location.state as typeof location | null;
    return state?.pathname || ROUTES.ADMIN;
  }, [location]);

  useEffect(() => {
    if (isAuthenticated) {
      navigator(toLocation);
    }
  }, [isAuthenticated, navigator, toLocation]);

  return <Form handleSubmit={handleLogin} loading={isFetching} />;
};

export default Page;
