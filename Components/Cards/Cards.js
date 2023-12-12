import { React, useState } from 'react';
import { Avatar, Card, Col, Row, Typography, Tooltip, Button, Progress, Radio } from 'antd';
import { AntDesignOutlined, UserOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

const DashCards = () => {
  const [size, setSize] = useState('large');
  return (
    <>
        <Row gutter={16} className='gap-6 mt-4 w-full' >

          <Col span={5} style={{ boxShadow: "0px 0px 5px 1px rgba(0 , 0, 0, 0.2)", borderRadius: '5px' }}>
            <Card className='w-full'
              bordered={false}>
              <Title level={4}>Total Projects </Title>
              <Title level={2}>10</Title>
              <Title level={5}>progress 12%</Title>
              <Progress type="line" percent={44} strokeWidth={16} strokeLinecap='square' strokeColor="#F8D236" trailColor='#F6EEFF' />
              <Paragraph>Total Task 120</Paragraph>
            </Card>
          </Col>

          <Col span={5} style={{ boxShadow: "0px 0px 5px 1px rgba(0 , 0, 0, 0.2)", borderRadius: '5px' }}>
            <Card className='w-full'
              bordered={false}>
              <Title level={4}>Completed Projects </Title>
              <Title level={2}>04</Title>
            <Progress type="line" percent={88} strokeWidth={16} strokeLinecap='square' strokeColor="#52C41A" trailColor='#F6EEFF' />
              <Paragraph>Completed Before 05 Days</Paragraph>
            </Card>
          </Col>

          <Col span={5} style={{ boxShadow: "0px 0px 5px 1px rgba(0 , 0, 0, 0.2)", borderRadius: '5px' }}>
            <Card className='w-full'
              bordered={false}>
              <Title level={4}>Inprogress Projects </Title>
              <Title level={2}>05</Title>
              <Progress type="line" percent={44} strokeWidth={16} strokeLinecap='square' strokeColor="#F8D236" trailColor='#F6EEFF' />
              <Paragraph>View Details</Paragraph>
            </Card>
          </Col>

          <Col span={5} style={{ boxShadow: "0px 0px 5px 1px rgba(0 , 0, 0, 0.2)", borderRadius: '5px' }}>
            <Card className='w-full'
              bordered={false}>
              <Title level={4}>Unassign Projects </Title>
              <Title level={2}>01</Title>
            <Progress type="line" percent={30} strokeWidth={16} strokeLinecap='square' strokeColor="#FF4D4F" trailColor='#F6EEFF' />
              <Paragraph>view Details</Paragraph>
            </Card>
          </Col>


        </Row>
    </>
  )
};
export default DashCards;

