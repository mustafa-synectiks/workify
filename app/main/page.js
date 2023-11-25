'use client'
import React, { useState } from 'react';
import {
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
  RightOutlined,
  IdcardFilled,
  LeftOutlined,
  SignalFilled,
  SearchOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Card } from 'antd';
import Cards from '@/Components/Cards/Cards'
const { Header, Sider, Content } = Layout;
const mainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const cardData1 = {
    title: 'Total Projects',
    numberOfProjects: 13,
    // imageUrl: 'https://placekitten.com/800/400', // Replace with your image URL
    totalTask: 5,
    progressPercentage: 15,
    progress: 75,
    isCompleted: true,
  };
  const cardData2 = {
    title: 'Completed Projects',
    numberOfProjects: 33,
    // imageUrl: 'https://placekitten.com/800/400', // Replace with your image URL
    totalTask: 15,
    progressPercentage: 15,
    progress: 75,
    isCompleted: true,
  };
  const cardData3 = {
    title: 'Inprogress Projects',
    numberOfProjects: 25,
    // imageUrl: 'https://placekitten.com/800/400', // Replace with your image URL
    totalTask: 35,
    progressPercentage: 55,
    progress: 35,
    isCompleted: true,
  };
  const cardData4 = {
    title: 'Unassign Projects',
    numberOfProjects: 44,
    // imageUrl: 'https://placekitten.com/800/400', // Replace with your image URL
    totalTask: 66,
    progressPercentage: 85,
    progress: 89,
    isCompleted: true,
  };
  return (
    <>
      <Layout theme="dark">
        <Header>
          <h5 className='uppercase text-white'>Synectiks</h5>
          <Button icon={<SearchOutlined />}>Search</Button>
        </Header>
      </Layout>
      <Layout className='relative h-screen'>
        <Sider trigger={null} collapsible collapsed={collapsed} theme="light" className='relative'>
          <Button
            className='absolute bottom-0 left-0'
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
        <Layout>
          <Content
            className='px-2 py-3 h-auto'
          >
            <h1 className='uppercase text-3xl'>workflow Management</h1>
            <div className="flex flex-row">
              <Cards {...cardData1} />
              <Cards {...cardData2} />
              <Cards {...cardData3} />
              <Cards {...cardData4} />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
export default mainLayout;