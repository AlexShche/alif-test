import { FC } from 'react';
import { Layout, Menu, MenuProps } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

import { menuLinks } from '../../config/routes';

const Header: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };

  return (
    <Layout.Header>
      <Menu
        onClick={onClick}
        className="container"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[location.pathname]}
        items={menuLinks.map((item) => ({
          key: item.link,
          label: item.name,
        }))}
      />
    </Layout.Header>
  );
};

export default Header;
