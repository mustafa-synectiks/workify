import React from 'react';
import { Avatar, Card, Col, Row, Typography, Tooltip } from 'antd';
import { AntDesignOutlined, UserOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

const Resources = () => (
    <>
        <div style={{ background: '#FFF', padding: '25px' }}>

            <Row gutter={16}>
                <Title level={2}>Project Lists</Title>

            </Row>
            <Row gutter={16}>


                <Col span={6} >
                    <Card className='shadow-md w-full'
                        bordered={false}
                    > <Title level={3}>Procurement</Title>
                        <Meta
                            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                            title="Angela Moss"
                            description="Project Manager"
                        />
                        <Title level={5}>Current Task - Document</Title>
                        <Paragraph>Created Date 12/09/2023</Paragraph>
                        <Paragraph>Due Date 12/09/2023</Paragraph>
                        <Paragraph>Total Task- 10</Paragraph>

                        <Avatar.Group
                            maxCount={4}
                            size="large"
                            maxStyle={{
                                color: '#f56a00',
                                backgroundColor: '#fde3cf',
                            }}
                        >
                            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
                            <Avatar
                                style={{
                                    backgroundColor: '#f56a00',
                                }}
                            >
                                K
                            </Avatar>
                            <Avatar
                                style={{
                                    backgroundColor: '#f56a00',
                                }}
                            >
                                K
                            </Avatar>
                            <Avatar
                                style={{
                                    backgroundColor: '#f56a00',
                                }}
                            >
                                K
                            </Avatar>
                            <Avatar
                                style={{
                                    backgroundColor: '#f56a00',
                                }}
                            >
                                K
                            </Avatar>
                            <Tooltip title="Ant User" placement="top">
                                <Avatar
                                    style={{
                                        backgroundColor: '#87d068',
                                    }}
                                    icon={<UserOutlined />}
                                />
                            </Tooltip>
                            <Avatar
                                style={{
                                    backgroundColor: '#1677ff',
                                }}
                                icon={<AntDesignOutlined />}
                            />
                        </Avatar.Group>

                    </Card>
                </Col>
                <Col span={6} >
                    <Card className='shadow-md w-full'
                        bordered={false}
                    > <Title level={3}>HRMS</Title>
                        <Meta
                            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                            title="Angela Moss"
                            description="Project Manager"
                        />
                        <Title level={5}>Current Task - Document</Title>
                        <Paragraph>Created Date 12/09/2023</Paragraph>
                        <Paragraph>Due Date 12/09/2023</Paragraph>
                        <Paragraph>Total Task- 10</Paragraph>

                        <Avatar.Group
                            maxCount={4}
                            size="large"
                            maxStyle={{
                                color: '#f56a00',
                                backgroundColor: '#fde3cf',
                            }}
                        >
                            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
                            <Avatar
                                style={{
                                    backgroundColor: '#f56a00',
                                }}
                            >
                                K
                            </Avatar>
                            <Avatar
                                style={{
                                    backgroundColor: '#f56a00',
                                }}
                            >
                                K
                            </Avatar>
                            <Avatar
                                style={{
                                    backgroundColor: '#f56a00',
                                }}
                            >
                                K
                            </Avatar>
                            <Avatar
                                style={{
                                    backgroundColor: '#f56a00',
                                }}
                            >
                                K
                            </Avatar>
                            <Tooltip title="Ant User" placement="top">
                                <Avatar
                                    style={{
                                        backgroundColor: '#87d068',
                                    }}
                                    icon={<UserOutlined />}
                                />
                            </Tooltip>
                            <Avatar
                                style={{
                                    backgroundColor: '#1677ff',
                                }}
                                icon={<AntDesignOutlined />}
                            />
                        </Avatar.Group>

                    </Card>
                </Col>
                <Col span={6} >
                    <Card className='shadow-md w-full'
                        bordered={false}
                    > <Title level={3}>App Kube</Title>
                        <Meta
                            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                            title="Angela Moss"
                            description="Project Manager"
                        />
                        <Title level={5}>Current Task - Document</Title>
                        <Paragraph>Created Date 12/09/2023</Paragraph>
                        <Paragraph>Due Date 12/09/2023</Paragraph>
                        <Paragraph>Total Task- 10</Paragraph>

                        <Avatar.Group
                            maxCount={4}
                            size="large"
                            maxStyle={{
                                color: '#f56a00',
                                backgroundColor: '#fde3cf',
                            }}
                        >
                            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
                            <Avatar
                                style={{
                                    backgroundColor: '#f56a00',
                                }}
                            >
                                K
                            </Avatar>
                            <Avatar
                                style={{
                                    backgroundColor: '#f56a00',
                                }}
                            >
                                K
                            </Avatar>
                            <Avatar
                                style={{
                                    backgroundColor: '#f56a00',
                                }}
                            >
                                K
                            </Avatar>
                            <Avatar
                                style={{
                                    backgroundColor: '#f56a00',
                                }}
                            >
                                K
                            </Avatar>
                            <Tooltip title="Ant User" placement="top">
                                <Avatar
                                    style={{
                                        backgroundColor: '#87d068',
                                    }}
                                    icon={<UserOutlined />}
                                />
                            </Tooltip>
                            <Avatar
                                style={{
                                    backgroundColor: '#1677ff',
                                }}
                                icon={<AntDesignOutlined />}
                            />
                        </Avatar.Group>

                    </Card>
                </Col>
                <Col span={6} >
                    <Card className='shadow-md w-full'
                        bordered={false}
                    >
                        <Title level={3}>Xformation</Title>
                        <Meta
                            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                            title="Angela Moss"
                            description="Project Manager"
                        />
                        <Title level={5}>Current Task - Document</Title>
                        <Paragraph>Created Date 12/09/2023</Paragraph>
                        <Paragraph>Due Date 12/09/2023</Paragraph>
                        <Paragraph>Total Task- 10</Paragraph>

                        <Avatar.Group
                            maxCount={4}
                            size="large"
                            maxStyle={{
                                color: '#f56a00',
                                backgroundColor: '#fde3cf',
                            }}
                        >
                            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
                            <Avatar
                                style={{
                                    backgroundColor: '#f56a00',
                                }}
                            >
                                K
                            </Avatar>
                            <Avatar
                                style={{
                                    backgroundColor: '#f56a00',
                                }}
                            >
                                K
                            </Avatar>
                            <Avatar
                                style={{
                                    backgroundColor: '#f56a00',
                                }}
                            >
                                K
                            </Avatar>
                            <Avatar
                                style={{
                                    backgroundColor: '#f56a00',
                                }}
                            >
                                K
                            </Avatar>
                            <Tooltip title="Ant User" placement="top">
                                <Avatar
                                    style={{
                                        backgroundColor: '#87d068',
                                    }}
                                    icon={<UserOutlined />}
                                />
                            </Tooltip>
                            <Avatar
                                style={{
                                    backgroundColor: '#1677ff',
                                }}
                                icon={<AntDesignOutlined />}
                            />
                        </Avatar.Group>

                    </Card>
                </Col>

            </Row>
        </div>,

    </>
);
export default Resources;

