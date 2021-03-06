import React, {useMemo} from 'react';
import {ROUTES} from 'src/routes';
import {useRoutes} from 'react-router';
import {useAuthStore} from 'src/store/auth/auth.actions';
import {isExpiredToken} from 'src/utils/storage/storage.token';

/** Layouts */
import LayoutAuthorization from 'src/misc/Authorization/Authorization';
import LayoutAdmin from 'src/misc/Admin/Admin';

/** Public */
import Authorization from './Authorization/Page';

/** private */
import MemberList from './Member/List';

export const Public = (): ReturnType<typeof useRoutes> =>
  useRoutes([
    {
      path: ROUTES.AUTHORIZATION,
      element: <LayoutAuthorization />,
      children: [{path: '', element: <Authorization />}],
    },
  ]);

export const Private = (): ReturnType<typeof useRoutes> =>
  useRoutes([
    {
      path: ROUTES.ADMIN,
      element: <LayoutAdmin />,
      children: [{path: '', element: <MemberList />}],
    },
  ]);

export const Routes = (): React.ReactElement => {
  const auth = useAuthStore();
  const isAuthenticated = useMemo(() => auth?.token && auth?.roles, [auth.roles, auth.token]);
  const isTokenExpired = useMemo(() => isExpiredToken(auth.token), [auth.token]);
  const isLoggedIn = !isTokenExpired && isAuthenticated;

  return isLoggedIn ? <Private /> : <Public />;
};
