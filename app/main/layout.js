'use client';
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
  IdcardFilled,
  SignalFilled,
  SearchOutlined,
  VideoCameraOutlined,
  RightOutlined,
  LeftOutlined,
  QuestionCircleOutlined,
  BellOutlined,
} from '@ant-design/icons';
import TabsComponent from '@/Components/Tabs/Tabs';
import { Layout, Menu, Button, theme, Card, Avatar, Badge, Input, Divider } from 'antd';
import CircularProgress from '@/Components/Charts/Circular';
import axios from 'axios';
import Cards from '@/Components/Cards/Cards';
import BarChart from '@/Components/Charts/BarChart';
import StackedBarChart from '@/components/Charts/StackedBarChart';
import Resources from '@/Components/Resources/Resources';
import Navbar from '@/Components/Navbar/Navbar';
import Sidebar from '@/Components/Sidebar/Sidebar';
// import projectLayout from '@/app/projects/page'
import ProjectsList from '@/Components/Projectslists/Projectslist'

const { Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSider = () => {
    setCollapsed(!collapsed);
  };

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
  const cardData5 = {
    title: 'Procurements',
    numberOfProjects: 13,
    // imageUrl: 'https://placekitten.com/800/400', // Replace with your image URL
    totalTask: 5,
    progressPercentage: 15,
    progress: 75,
    isCompleted: true,
  };
  const cardData6 = {
    title: 'Completed Projects',
    numberOfProjects: 33,
    // imageUrl: 'https://placekitten.com/800/400', // Replace with your image URL
    totalTask: 15,
    progressPercentage: 15,
    progress: 75,
    isCompleted: true,
  };
  const cardData7 = {
    title: 'Inprogress Projects',
    numberOfProjects: 25,
    // imageUrl: 'https://placekitten.com/800/400', // Replace with your image URL
    totalTask: 35,
    progressPercentage: 55,
    progress: 35,
    isCompleted: true,
  };
  const cardData8 = {
    title: 'Unassign Projects',
    numberOfProjects: 44,
    // imageUrl: 'https://placekitten.com/800/400', // Replace with your image URL
    totalTask: 66,
    progressPercentage: 85,
    progress: 89,
    isCompleted: true,
  };
  // const barChartData = [
  //   { name: 'A', value: 30 },
  //   { name: 'B', value: 60 },
  //   { name: 'C', value: 45 },
  //   { name: 'D', value: 80 },
  //   { name: 'E', value: 80 },
  //   { name: 'F', value: 80 },
  //   { name: 'G', value: 80 },
  //   // Add more data as needed
  // ];
  const stackedBarChartData = [
    { name: 'A', value1: 30, value2: 20 },
    { name: 'B', value1: 60, value2: 40 },
    { name: 'C', value1: 45, value2: 25 },
    { name: 'D', value1: 80, value2: 30 },
    { name: 'E', value1: 80, value2: 30 },
    { name: 'F', value1: 80, value2: 30 },
    { name: 'G', value1: 80, value2: 30 },
    // Add more data as needed
  ];
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const barChartData = [
    { name: 'Category 1', 'Agent A': 30, 'Agent B': 20 },
    { name: 'Category 2', 'Agent A': 60, 'Agent B': 40 },
    { name: 'Category 3', 'Agent A': 45, 'Agent B': 25 },
    { name: 'Category 4', 'Agent A': 80, 'Agent B': 30 },
    { name: 'Category 5', 'Agent A': 80, 'Agent B': 30 },
    { name: 'Category 6', 'Agent A': 30, 'Agent B': 20 },
    { name: 'Category 7', 'Agent A': 60, 'Agent B': 40 },
    { name: 'Category 8', 'Agent A': 45, 'Agent B': 25 },
    { name: 'Category 9', 'Agent A': 80, 'Agent B': 30 },
    { name: 'Category 10', 'Agent A': 80, 'Agent B': 30 },
    // Add more data as needed
  ];
  const tabData = [
    {
      title: 'All',
      content: (
        <>
          <div className='flex flex-row'>
            <Cards {...cardData5} />
            <Cards {...cardData6} />
            <Cards {...cardData7} />
            <Cards {...cardData8} />
          </div>
        </>
      ),
    },
    {
      title: 'Inprogress',
      content: (
        <>
          <div className='flex flex-row'>
            <Cards {...cardData5} />
            <Cards {...cardData6} />
            <Cards {...cardData7} />
            <Cards {...cardData8} />
          </div>
        </>
      ),
    },
    {
      title: 'Completed',
      content: (
        <>
          <div className='flex flex-row'>
            <Cards {...cardData5} />
            <Cards {...cardData6} />
            <Cards {...cardData7} />
            <Cards {...cardData8} />
          </div>
        </>
      ),
    },
    // Add more tabs as needed
  ];
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
                path:'/'
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'Projects',
                path:'/projects'
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
            <div className="flex flex-row gap-9 w-full">
              <Cards {...cardData1} />
              <Cards {...cardData2} />
              <Cards {...cardData3} />
              <Cards {...cardData4} />
            </div>
            <div className="flex flex-col space-y-6">
              <div className="bg-white my-6 p-10">
                <div className="flex flex-col">
                  <h2 className='text-3xl'>Project Overview</h2>
                  <div className="divide-y divide-gray-400 hover:divide-y-8"></div>
                  <Divider type="vertical" />
                  {/* <BarChart data={barChartData} /> */}
                  <BarChart data={barChartData} />
                </div>
              </div>
            </div>
            <div className="bg-white my-6 p-10">
              <div className="flex flex-col justify-center items-start">
                <div className="flex flex-col">
                  <h2 className='text-3xl'>Top Project Resources</h2>
                  <h5 className='text-xl'>Top most resources working on top projects</h5>
                </div>
                <StackedBarChart data={stackedBarChartData} />
              </div>
            </div>
            <div className='my-5'>
              <ProjectsList/>
            </div>
            <div>
              <Resources />
            </div>
            <projectLayout/>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;
