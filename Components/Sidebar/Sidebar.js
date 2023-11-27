
import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;

const Sidebar = () => {

<Layout>
    <Sider trigger={null} collapsible collapsed={collapsed} theme="light" className='relative'>
        <Button
            className='fixed top-0 left-0'
            type="text"
            icon={collapsed ? <CaretRightFilled className='border-l-2 border-black' /> : <CaretLeftFilled className='border-r-2 border-black' />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
                fontSize: '16px',
                width: 64,
                height: 64,
                background: colorBgContainer

            }}
        />
        <div className="demo-logo-vertical" />
        <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
                {
                    key: '1',
                    icon: <ProjectFilled />,
                    label: 'Dashboard',
                },
                {
                    key: '2',
                    icon: <VideoCameraOutlined />,
                    label: 'Projects',
                },
                {
                    key: '3',
                    icon: <SignalFilled />,
                    label: 'Team',
                },
                {
                    key: '4',
                    icon: <IdcardFilled />,
                    label: 'Reports',
                },
                {
                    key: '5',
                    icon: <AccountBookFilled />,
                    label: 'Preference',
                },
                {
                    key: '6',
                    icon: <BellFilled />,
                    label: 'Notifications',
                },
            ]}
        />
    </Sider>
</Layout>

};

export default Sidebar;
