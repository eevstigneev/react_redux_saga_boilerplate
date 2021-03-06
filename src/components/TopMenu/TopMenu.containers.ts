import styled from '@emotion/styled';
import {Button, Drawer, Menu as AntMenu} from 'antd';
import {withMediaQueriesSM} from 'src/styles/mixins';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 0 30px #f3f1f1;
  background: #fff;
  border-bottom: solid 1px #e8e8e8;
`;
export const LogoStyled = styled.div`
  flex: 0 0 150px;
`;

export const NavStyled = styled.nav`
  display: none;
  margin-left: auto;
  margin-right: 15px;
  ${withMediaQueriesSM('display: block !important;')}
`;

export const MobileDrawer = styled(Drawer)`
  .ant-drawer-body {
    padding: 0;
  }
  .ant-drawer-body .ant-menu-horizontal > .ant-menu-item,
  .ant-drawer-body .ant-menu-horizontal > .ant-menu-submenu {
    display: inline-block;
    width: 100%;
  }

  .ant-drawer-body .ant-menu-horizontal {
    border-bottom: none;
  }

  .ant-drawer-body .ant-menu-horizontal > .ant-menu-item:hover {
    border-bottom-color: transparent;
  }
`;

export const LoafButtonStyled = styled(Button)`
  position: relative;
  margin-left: auto;
  ${withMediaQueriesSM('display: none !important;')}
  &:empty {
    width: auto;
    visibility: visible;
  }
  &::after,
  &::before {
    display: block;
    opacity: 1;
    content: attr(x);
    position: absolute;
    left: 5px;
    right: 5px;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-left-width: 0;
    border-right-width: 0;
    border-style: solid;
    border-color: inherit;
    border-radius: unset;
  }
  &::before {
    top: 6px;
    bottom: 6px;
  }
  &::after {
    top: calc(50% + 1px);
    transform: translateY(-50%);
    height: 2px;
    border-bottom: unset;
    z-index: +1;
  }
`;

export const MenuStyled = styled(AntMenu)`
  &.ant-menu-horizontal {
    border-bottom: none;
  }
`;

export const MenuItemStyled = styled(AntMenu.Item)`
  padding: 0 5px;
`;

export const SubMenuStyled = styled(AntMenu.SubMenu)``;

export const ButtonStyled = styled(Button)`
  font-weight: normal;
  text-align: left;
  padding-left: 0;
`;
