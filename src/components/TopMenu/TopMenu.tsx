import React from 'react';
import {Grid} from 'antd';
import {createPath, ROUTES} from 'src/routes';
import {Link} from 'react-router-dom';
import {LogoutOutlined, UserOutlined} from '@ant-design/icons';
import {logout, useAuthAction, useAuthStore} from 'src/store/auth/auth.actions';
import {useNavigate} from 'react-router';
import {ButtonStyled, MenuItemStyled, MenuStyled, SubMenuStyled} from './TopMenu.containers';
import Avatar from '../Avatar/Avatar';

const {useBreakpoint} = Grid;
const TopMenu: React.FC = () => {
  const {md} = useBreakpoint();
  const navigator = useNavigate();
  const {username, id} = useAuthStore();
  const handleLogout = useAuthAction(logout);
  const onLogout = (): void => {
    handleLogout();
    navigator(ROUTES.AUTHORIZATION);
  };

  return (
    <MenuStyled mode={md ? 'horizontal' : 'inline'}>
      <SubMenuStyled icon={<Avatar />} title={username}>
        {id && (
          <MenuItemStyled icon={<UserOutlined />}>
            <Link to={createPath({path: ROUTES.MEMBER_UPDATE, params: {memberId: id}})}>Профиль</Link>
          </MenuItemStyled>
        )}
        <MenuItemStyled icon={<LogoutOutlined />}>
          <ButtonStyled type="link" onClick={onLogout}>
            Выйти
          </ButtonStyled>
        </MenuItemStyled>
      </SubMenuStyled>
    </MenuStyled>
  );
};
export default TopMenu;
