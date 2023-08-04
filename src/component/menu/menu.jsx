import {  Layout, Menu,  } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  HomeTwoTone,
  LoadingOutlined,
  IdcardTwoTone,
  ShoppingTwoTone
} from '@ant-design/icons';

const {  Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
    
  };
}

const items = [
  getItem('Home','/home', <HomeTwoTone />),
  getItem('Productos','/productoss', <ShoppingTwoTone />,
  [
    getItem('Zapatillas', '/Zapatillas'),
    getItem('Ropa', '/Ropa'),
  ] ),
  getItem('ventas', '/ventas', <LoadingOutlined />),
  getItem('Registrar', '/registro', <IdcardTwoTone />),
]

const Leftmenu = () => {
  const navigate=useNavigate()

  return (
    <Layout
    style={{ minHeight: '100vh', backgroundColor: 'whitesmoke' }}
  >
    <Sider>
      <div className="demo-logo-vertical" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}onClick={({key}=items)=>{ navigate(key)}} />
    </Sider>
    </Layout>
  );
};

export default Leftmenu;
