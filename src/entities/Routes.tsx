import React from 'react';
import {ROUTES} from 'src/routes';
import {useRoutes} from 'react-router';
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
      children: [
        {
          path: '',
          element: <Authorization />,
        },
      ],
    },
  ]);

export const Private = (): ReturnType<typeof useRoutes> =>
  useRoutes([
    {
      path: ROUTES.ADMIN,
      element: <LayoutAdmin />,
      children: [
        {
          path: '',
          element: <MemberList />,
        },
      ],
    },
  ]);
