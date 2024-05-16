import React, { useState } from "react";
import { Layout, Typography, Badge, Avatar, Dropdown, Menu, Space } from "antd";
import { BellOutlined, DownOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Title } = Typography;

const HeaderComponent = () => {
    const colorBgContainer = "#001529"; // example color
    const [notifications, setNotifications] = useState(3); // Example number of notifications
    const [bellVisible, setBellVisible] = useState(false); // Track if bell dropdown is visible

    const bellMenu = (
        <Menu>
            <Menu.Item key="0">
                Notification 1
            </Menu.Item>
            <Menu.Item key="1">
                Notification 2
            </Menu.Item>
            <Menu.Item key="2">
                Notification 3
            </Menu.Item>
        </Menu>
    );

    const userMenu = (
        <Menu>
            <Menu.Item key="0">
                Profile
            </Menu.Item>
            <Menu.Item key="1">
                Settings
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">
                Logout
            </Menu.Item>
        </Menu>
    );

    const handleBellVisibleChange = (visible) => {
        if (visible) {
            // Reset notifications when bell menu is opened
            setNotifications(0);
        }
        setBellVisible(visible);
    };

    return (
        <Header style={{ padding: 0, background: 'white', borderBottom: '1px solid #f0f0f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Title style={{ marginLeft: '10px', marginTop: '10px', color: colorBgContainer }} level={2}> Dashboard</Title>
                <Space size="large">
                    <Dropdown 
                        overlay={bellMenu} 
                        trigger={['click']}
                        visible={bellVisible}
                        onVisibleChange={handleBellVisibleChange}
                    >
                        <Badge count={notifications} overflowCount={9} style={{ backgroundColor: notifications > 0 ? 'red' : 'transparent' }}>
                            <BellOutlined style={{ fontSize: '20px', color: colorBgContainer }} />
                        </Badge>
                    </Dropdown>
                    <Dropdown overlay={userMenu} trigger={['click']}>
                        <Avatar size="small" src="https://via.placeholder.com/150" />
                    </Dropdown>
                    <DownOutlined style={{ color: colorBgContainer, fontSize: '16px' }} />
                </Space>
            </div>
        </Header>
    );
};

export default HeaderComponent;
