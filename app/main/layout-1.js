'use client'
import React, { useEffect, useState } from 'react';
import {
  SearchOutlined,
} from '@ant-design/icons';
import TabsComponent from '@/Components/Tabs/Tabs';
import { Layout, Menu, Button, theme, Card } from 'antd';
import CircularProgress from '@/Components/Charts/Circular';
import axios from 'axios';
import Cards from '@/Components/Cards/Cards'
import Barchart from '@/Components/Charts/Barchart'
import Resources from '@/Components/Resources/Resources';
const { Header, Sider, Content } = Layout;
const mainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  // const [barChartData, setBarChartData] = useState([]);
  // const [stackedBarChartData, setStackedBarChartData] = useState([]);
  // useEffect(() => {
  // Fetch data for Bar Chart
  // axios.get('https://api.example.com/barChartData').then((response) => {
  //   setBarChartData(response.data);
  // });

  // Fetch data for Stacked Bar Chart
  //   axios.get('https://api.example.com/stackedBarChartData').then((response) => {
  //     setStackedBarChartData(response.data);
  //   });
  // }, []);
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
      title: 'Tab 1',
      content: (
        <>
          <div className='flex flex-row'>
            <Cards {...cardData1} />
            <Cards {...cardData2} />
            <Cards {...cardData3} />
            <Cards {...cardData4} />
          </div>
        </>
      ),
    },
    {
      title: 'Tab 2',
      content: (
        <>
          <div className='flex flex-row'>
            <Cards {...cardData1} />
            <Cards {...cardData2} />
            <Cards {...cardData3} />
            <Cards {...cardData4} />
          </div>
        </>
      ),
    },
    // Add more tabs as needed
  ];
  return (
    <>
      <Layout theme="dark">
        <Header>
          <h5 className='uppercase text-white'>Synectiks</h5>
          <Button icon={<SearchOutlined />}>Search</Button>
        </Header>
      </Layout>
      <Layout className='relative'>

        <Layout>
          <Content
            className='px-2 py-3'
          >
            <h1 className='uppercase text-3xl'>workflow Management</h1>
            <div className="flex flex-row">
              <Cards {...cardData1} />
              <Cards {...cardData2} />
              <Cards {...cardData3} />
              <Cards {...cardData4} />
            </div>

            <div className="flex flex-col w-full">
              <h2>Bar Chart</h2>
              {/* <BarChart data={barChartData} /> */}
              <Barchart />
            </div>
            <div className="flex flex-col w-full">
              <h2>Stacked Bar  </h2>
              {/* <StackedBarChart data={stackedBarChartData} /> */}
            </div>
            <CircularProgress />
            <div>
              <Resources />
            </div>
            <TabsComponent tabData={tabData} />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
export default mainLayout;