'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
    PlusSquareFilled,
    CaretUpFilled,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    CaretLeftFilled,
    CaretRightFilled,
    AccountBookFilled,
    BellFilled,
    ProjectFilled,
    IdcardFilled,
    SignalFilled,
    SearchOutlined,
    VideoCameraOutlined,
    RightOutlined,
    LeftOutlined,
    QuestionCircleOutlined,
    BellOutlined,
    DownOutlined,
} from '@ant-design/icons';
import TabsComponent from '@/Components/Tabs/Tabs';
import { Space, Layout, Menu, Button, theme, Card, Avatar, Badge, Input, Divider, Typography, Col, Row, Dropdown, message, } from 'antd';
import Navbar from '@/Components/Navbar/Navbar';
import Sidebar from '@/Components/Sidebar/Sidebar';
import projectLayout from '@/app/projects/page';
import allProjects from '@/Components/Projects/allProject'

const { Sider, Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const ProjectLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSider = () => {
        setCollapsed(!collapsed);
    };
    const items = [
        {
            label: 'All Projects',
            key: '1',
        },
        {
            label: 'In Progress',
            key: '1',
        },
        {
            label: 'Completed',
            key: '3',
        },

    ];
    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };
    const menuProps = {
        items,
        onClick: handleMenuClick,
    };
    return (
        <>
            <Layout theme="dark" style={{ minHeight: '100vh' }}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    theme="light"
                    className="fixed "
                    style={{ position: 'fixed', height: '100vh' }}
                >
                    <h5 className='uppercase bg-[#001529] text-white text-2xl p-4'>Synect<span className='text-red-700'>i</span>ks</h5>
                    {/* ... your existing Sider content */}
                    <Menu className='relative'
                        theme="light"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <ProjectFilled />,
                                label: 'Dashboard',
                                path: '/'
                            },
                            {
                                key: '2',
                                icon: <VideoCameraOutlined />,
                                label: 'Projects',
                                path: '/projects'
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
                    <Button theme="dark"
                        className='bg-white absolute top-2/4 -right-3'
                        type="text"
                        icon={collapsed ? < RightOutlined className='' /> : <LeftOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 16,
                            height: 64,
                            clipPath: `polygon(0 0, 100% 21%, 99% 80%, 0% 100%)`
                        }}
                    />
                </Sider>
                <Layout className="site-layout" style={{ marginLeft: collapsed ? 80 : 200 }}>
                    <Navbar />
                    <Content style={{ margin: '18px 16px', padding: '0px 10px', minHeight: 280 }}>
                        <h1 className='ml-2 uppercase text-3xl'>workflow Management</h1>
                        <div className='bg-white flex flex-row justify-between items-center py-2 px-5'>
                            <Title level={3}>All Projects</Title>
                            {/* <div><Button> All Project</Button></div> */}
                            <Dropdown menu={menuProps}>
                                <Button>
                                    <Space>
                                        All Project
                                        <DownOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>
                        </div>
                        <div className='my-5'>
                            <Row gutter={16}>
                                <Col span={6}>
                                    <Card title="Project 1" headerFontSize={22} bordered={false} >
                                        <div className='flex flex-row justify-around items-center p-0'>
                                            <Text className='text-xl'>Total Usecase</Text>
                                            <Text>20</Text>
                                        </div>
                                        <div className='flex flex-row justify-around items-center my-4'>
                                            <h4>Total Resources</h4>
                                            <p>20</p>
                                        </div>
                                        <div className='flex flex-row justify-around items-center'>
                                            <Button className='bg-green-300'>Completed</Button>
                                            <Text></Text>
                                        </div>
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card title="Project 2" headerFontSize={22} bordered={false} >
                                        <div className='flex flex-row justify-around items-center'>
                                            <Text className='text-xl'>Total Usecase</Text>
                                            <Text>20</Text>
                                        </div>
                                        <div className='flex flex-row justify-around items-center my-4'>
                                            <Text>Total Resources</Text>
                                            <Text>20</Text>
                                        </div>
                                        <div className='flex flex-row justify-around items-center'>
                                            <Button className='bg-orange-300'>In Progress</Button>
                                            <Text></Text>
                                        </div>
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card title="Project 3" headerFontSize={22} bordered={false} >
                                        <div className='flex flex-row justify-around items-center'>
                                            <Text className='text-xl'>Total Usecase</Text>
                                            <Text>20</Text>
                                        </div>
                                        <div className='flex flex-row justify-around items-center my-4'>
                                            <Text>Total Resources</Text>
                                            <Text>20</Text>
                                        </div>
                                        <div className='flex flex-row justify-around items-center'>
                                            <Button className='bg-green-300'>Completed</Button>
                                            <Text></Text>
                                        </div>
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card title="Project 4" headerFontSize={22} bordered={false} >
                                        <div className='flex flex-row justify-around items-center'>
                                            <Text className='text-xl'>Total Usecase</Text>
                                            <Text>20</Text>
                                        </div>
                                        <div className='flex flex-row justify-around items-center my-4'>
                                            <Text>Total Resources</Text>
                                            <Text>20</Text>
                                        </div>
                                        <div className='flex flex-row justify-around items-center'>
                                            <Button className='bg-orange-300'>In Progress</Button>
                                            <Text></Text>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={6}>
                                    <Card className='my-5 p-14'>
                                        <Link href='/projects/addProject'>
                                            <div className="flex flex-row justify-around items-center bg-gray-200 p-2 w-50">
                                                <PlusSquareFilled style={{ fontSize: '24px' }} /> <Title level={4}>Project</Title>
                                            </div>
                                        </Link>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                        {/* <allProjects /> */}
                        <projectLayout />
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

export default ProjectLayout;
