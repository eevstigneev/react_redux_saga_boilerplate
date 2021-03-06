import React from 'react';
import {Outlet} from 'react-router-dom';
import {CardStyled, LayoutStyled, RowStyled, ColStyled} from './Authorization.containers';

const Authorization: React.FC = () => {
  return (
    <LayoutStyled>
      <RowStyled align="middle" justify="center">
        <ColStyled>
          <CardStyled size="default" bordered>
            <Outlet />
          </CardStyled>
        </ColStyled>
      </RowStyled>
    </LayoutStyled>
  );
};

export default Authorization;
