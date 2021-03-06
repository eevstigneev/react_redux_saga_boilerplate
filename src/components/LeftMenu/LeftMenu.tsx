import React from 'react';
import {UserOutlined} from '@ant-design/icons';
import {Link, useLocation} from 'react-router-dom';
import {ROUTES} from 'src/routes';
import {MenuStyled, MenuItemStyled, ItemGroupStyled} from './LeftMenu.containers';

const LeftMenu: React.FC = () => {
  const location = useLocation();
  return (
    <MenuStyled mode="inline" defaultSelectedKeys={[ROUTES.ADMIN]} selectedKeys={[location.pathname]}>
      <ItemGroupStyled title="Безопасность">
        <MenuItemStyled key={ROUTES.MEMBER_LIST} icon={<UserOutlined />}>
          <Link to={ROUTES.MEMBER_LIST}>Пользователи</Link>
        </MenuItemStyled>
      </ItemGroupStyled>
      <ItemGroupStyled title="Справочники" />
    </MenuStyled>
  );
};

export default LeftMenu;
