import {
  BarChartOutlined,
  ClockCircleOutlined,
  DownOutlined,
  LaptopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlayCircleOutlined,
  SettingOutlined,
  UngroupOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import logo from '@assets/images/logo_dashboard.png';
import { setTitle } from '@helpers/dom';
import { Avatar, Button, Dropdown, Image, Layout, Menu, Space } from 'antd';
import 'antd/dist/antd.css';

import React, { Fragment, useEffect, useState } from 'react';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import './style.scss';
const { Header, Sider, Content } = Layout;

const MasterLayout = (props: any) => {
  useEffect(() => {
    setTitle('Dash Board');
  }, []);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  // tslint:disable-next-line: variable-name
  const menu_language = (
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">English</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">Vietnamese</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Fragment>
      <Layout className="master-layout">
        <Layout className=" master-header">
          <Sider width={250} trigger={null} collapsible collapsed={collapsed}>
            <div className="logo">
              <Image src={logo} className="img_logo" preview={false} />
            </div>
          </Sider>
          <Content className="content-header-nvg">
            <Header className="header">
              <div className="menu_fold">
                <Button type="text" onClick={toggleCollapsed}>
                  {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
                <div>DashBoard</div>
              </div>
              <div className="menu_settings">
                <Space size={'large'}>
                  <Dropdown overlay={menu_language} trigger={['click']}>
                    <div>
                      language <DownOutlined />
                    </div>
                  </Dropdown>
                  <Dropdown overlay={menu_language} trigger={['click']}>
                    <div>
                      <Avatar>H</Avatar> Ko Giòn Rồi
                    </div>
                  </Dropdown>
                </Space>
              </div>
            </Header>
          </Content>
        </Layout>
        {/* menu */}
        <Layout className="master-content">
          <Sider width={250} trigger={null} collapsible collapsed={collapsed}>
            <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['1']} mode="inline" theme="dark" className="left_menu">
              <Menu.Item key="1" icon={<BarChartOutlined />}>
                <Link to="/home">
                  <span>Dashboard</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<UsergroupAddOutlined />}>
                <span>Account</span>
              </Menu.Item>
              <Menu.Item key="3" icon={<UserOutlined />}>
                <span>Custormer</span>
              </Menu.Item>
              <Menu.Item key="4" icon={<LaptopOutlined />}>
                <span>All devices</span>
              </Menu.Item>
              <Menu.Item key="5" icon={<UngroupOutlined />}>
                <span>Groups</span>
              </Menu.Item>
              <Menu.Item key="6" icon={<PlayCircleOutlined />}>
                <span>Media</span>
              </Menu.Item>
              <Menu.Item key="7" icon={<ClockCircleOutlined />}>
                <span>Pending Approval</span>
              </Menu.Item>
              <Menu.Item key="8" icon={<SettingOutlined />}>
                <span>Setting</span>
              </Menu.Item>
              <Menu.Item key="9" className="name_footer" icon={''}>
                <span>
                  <span className="name_footer_1"> WinSmart</span>
                  <span className="name_footer_2">SingIn</span> <span className="name_footer_3">Version 1.0</span>
                </span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content
              className="master-layout"
              style={{
                minHeight: 280,
                background: 'transparent',
              }}
            >
              <div className="h-full">
                {props.children}
                {!!props.route && renderRoutes(props.route.routes)}
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Fragment>
  );
};

export default MasterLayout;
