import { React, useState } from 'react';
import { Avatar, Card, Col, Row, Typography, Tooltip, Button, Progress, Radio } from 'antd';
import { AntDesignOutlined, UserOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

const ProjectsList = () => {
    const [size, setSize] = useState('large');
    return (
        <>
           
            <div style={{ background: '#FFF', padding: '25px' }}>

                <Row gutter={16}>
                    {/* <Title level={2}>Project Lists</Title> */}

                    <div className="flex flex-row justify-between items-center w-full">
                        <Title level={2}>Project  Lists</Title>
                        <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
                            <Radio.Button value="All Projects">All</Radio.Button>
                            <Radio.Button value="In Progress">Inprogress</Radio.Button>
                            <Radio.Button value="Completed">Completed</Radio.Button>
                        </Radio.Group>
                    </div>

                </Row>
                <Row gutter={16} className='gap-6 mt-4' >
                    <Col span={5} style={{ boxShadow: "0px 0px 5px 1px rgba(0 , 0, 0, 0.2)", borderRadius: '5px' }}>
                        <Card className='w-full flex justify-center'
                            bordered={false}
                        >
                            <Title level={3}>Procurement</Title>
                            <Button className='bg-orange-300'>In Progress</Button>
                            <Title level={5}>Total Usecase - 30 </Title>
                            <Paragraph>Due Date 12/09/2023</Paragraph>
                            <Progress type="circle" percent={44} strokeWidth={16} strokeLinecap='square' strokeColor="#F8D236" trailColor='#F6EEFF' />
                            <Title level={4} className='mt-2 mx-auto'>Task Completed</Title>
                        </Card>
                    </Col>
                    <Col span={5} style={{ boxShadow: "0px 0px 5px 1px rgba(0 , 0, 0, 0.2)", borderRadius: '5px' }}>
                        <Card className='w-full flex justify-center'
                            bordered={false}
                        >
                            <Title level={3}>HRMS</Title>
                            <Button className='bg-orange-300'>In Progress</Button>
                            <Title level={5}>Total Usecase - 30 </Title>
                            <Paragraph>Due Date 12/09/2023</Paragraph>
                            <Progress type="circle" percent={88} strokeWidth={16} strokeLinecap='square' trailColor='#F6EEFF' strokeColor="#4CCA72" />
                            <Title level={4} className='mt-2 mx-auto'>Task Completed</Title>
                        </Card>
                    </Col>
                    <Col span={5} style={{ boxShadow: "0px 0px 5px 1px rgba(0 , 0, 0, 0.2)", borderRadius: '5px' }}>
                        <Card className='w-full flex justify-center'
                            bordered={false}
                        >
                            <Title level={3}>App Kube</Title>
                            <Button className='bg-orange-300'>In Progress</Button>
                            <Title level={5}>Total Usecase - 30 </Title>
                            <Paragraph>Due Date 12/09/2023</Paragraph>
                            <Progress type="circle" percent={62} strokeWidth={16} strokeLinecap='square' trailColor='#F6EEFF' />
                            <Title level={4} className='mt-2 mx-auto'>Task Completed</Title>
                        </Card>
                    </Col>
                    <Col span={5} style={{ boxShadow: "0px 0px 5px 1px rgba(0 , 0, 0, 0.2)", borderRadius: '5px' }}>
                        <Card className='w-full flex justify-center'
                            bordered={false}
                        >
                            <Title level={3}>Xformation</Title>
                            <Button className='bg-orange-300'>In Progress</Button>
                            <Title level={5}>Total Usecase - 30 </Title>
                            <Paragraph>Due Date 12/09/2023</Paragraph>
                            <Progress type="circle" percent={85} strokeWidth={16} strokeLinecap='square' trailColor='#F6EEFF' strokeColor="#4CCA72" />
                            <Title level={4} className='mt-2 mx-auto'>Task Completed</Title>
                        </Card>
                    </Col>

                </Row>
            </div>
        </>
    )
};
export default ProjectsList;

