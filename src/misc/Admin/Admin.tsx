import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';
import LeftMenu from 'src/components/LeftMenu/LeftMenu';
import {ContentStyled, LayoutStyled, SiderStyled} from './Admin.containers';

const Admin: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    <LayoutStyled>
      {/* <TopNavigation /> */}
      <LayoutStyled>
        <SiderStyled collapsible collapsed={collapsed} onCollapse={setCollapsed}>
          <LeftMenu />
        </SiderStyled>
        <ContentStyled>
          <Outlet />
        </ContentStyled>
      </LayoutStyled>
    </LayoutStyled>
  );
};

export default Admin;
