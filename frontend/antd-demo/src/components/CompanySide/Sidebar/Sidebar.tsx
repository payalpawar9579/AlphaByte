import { Button, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";
import ViewJobs from "../Viewjobs/ViewJobs";
import Dashboard from "../Dashboard/Dashboard";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import CodingEnvironment from "../../CodingEnvo/CodingEnvo";
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState('nav1');

  const handleMenuItemClick = (key: string) => {
    setSelectedNavItem(key);
  };

  return (
    <Layout>
      <Sider
        style={{ height: '100vh', width: '200px',background:"white" }}
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={300}
        

      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['nav1']}
          selectedKeys={[selectedNavItem]}
          onClick={({ key }) => handleMenuItemClick(key)}
        >
          <Menu.Item key="nav1" icon={<UserOutlined />}>
            Offered Openinig
          </Menu.Item>
          <Menu.Item key="nav2" icon={<VideoCameraOutlined />}>
            Dashboard 
          </Menu.Item>
          <Menu.Item key="nav3" icon={<UploadOutlined />}>
            Conding Environment
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 78,
            height: 64,
          }}
        />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: 'white', // Change background to white
            borderRadius: '16px', // Add border radius
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              overflowY: 'auto',
              maxHeight: 'calc(100vh - 200px)',
            }}
          >
            {selectedNavItem === 'nav1' && <ViewJobs />}
            {selectedNavItem === 'nav2' && <Dashboard />}
            {selectedNavItem === 'nav3' && <CodingEnvironment />}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
