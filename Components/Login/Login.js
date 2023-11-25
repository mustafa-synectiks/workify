// 'use client'
// import React from 'react'
// import { Card, Progress } from 'antd';
// const Login = () => {
//     return (
//         <>
//             <section>
//                 <div className="login-container w-full flex flex-row items-center justify-between">
//                     <Card className="login-left-wrapper p-12 w-full h-full bg-blue-100">
//                         <h3 className='text-3xl text-blue-800 font-semibold uppercase mb-2'>Synect<span className='text-red-800'>i</span>ks</h3>
//                         <h4 className='text-2xl font-bold'>Workflow Management</h4>
//                         <h5 className='w-1/2 font-black font-bold'>Manage your project and the team in easy way</h5>

//                     </Card>
//                     <div className="login-right-wrapper">
//                         <div className="flex flex-col">

//                             <div className="btn-wrapper bg-gray-400">
//                                 <a href="#" className="login-btn text-blue-400">Login</a>
//                                 <a href="#" className="login-btn">Sign Up</a>
//                             </div>

//                             <form action="http://localhost:3000/main">
//                                 <div className='mb-6'>
//                                     <input type="email" name="email" id="email" className='border b-2 border-cyan-500' placeholder='username:admin or user' />
//                                 </div>
//                                 <div><input type="password" name="password" id="password" className='border b-2 border-cyan-500' placeholder='password:synectiks.design' /></div>
//                                 <div className="flex flex-row">
//                                     <div><input type="checkbox" name="checkbox" id="checkbox" /> <span>Remember me</span></div>
//                                     <div><a href="">forgot your password</a></div>
//                                 </div>
//                                 <input type="submit" value="Sign In" className='cursor-pointer bg-blue-700 text-white px-3 py-2 rounded'/>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Login
import {
    AlipayCircleOutlined,
    LockOutlined,
    MobileOutlined,
    TaobaoCircleOutlined,
    UserOutlined,
    WeiboCircleOutlined,
} from '@ant-design/icons';
import {
    LoginForm,
    ProConfigProvider,
    ProFormCaptcha,
    ProFormCheckbox,
    ProFormText,
    setAlpha,
} from '@ant-design/pro-components';
import { Space, Tabs, message, theme } from 'antd';
import { useState } from 'react';

LoginType = 'phone' | 'account';

export default () => {
    const { token } = theme.useToken();
    const [loginType, setLoginType] = useState < LoginType > ('phone');

    const iconStyles = {
        marginInlineStart: '16px',
        color: setAlpha(token.colorTextBase, 0.2),
        fontSize: '24px',
        verticalAlign: 'middle',
        cursor: 'pointer',
    };

    return (
        <ProConfigProvider hashed={false}>
            <div style={{ backgroundColor: token.colorBgContainer }}>
                <LoginForm
                    logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                    title="Github"
                    subTitle="全球最大的代码托管平台"
                    actions={
                        <Space>
                            其他登录方式
                            <AlipayCircleOutlined style={iconStyles} />
                            <TaobaoCircleOutlined style={iconStyles} />
                            <WeiboCircleOutlined style={iconStyles} />
                        </Space>
                    }
                >
                    <Tabs
                        centered
                        activeKey={loginType}
                        onChange={(activeKey) => setLoginType(activeKey)}
                    >
                        <Tabs.TabPane key={'account'} tab={'账号密码登录'} />
                        <Tabs.TabPane key={'phone'} tab={'手机号登录'} />
                    </Tabs>
                    {loginType === 'account' && (
                        <>
                            <ProFormText
                                name="username"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <UserOutlined className={'prefixIcon'} />,
                                }}
                                placeholder={'用户名: admin or user'}
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入用户名!',
                                    },
                                ]}
                            />
                            <ProFormText.Password
                                name="password"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <LockOutlined className={'prefixIcon'} />,
                                    strengthText:
                                        'Password should contain numbers, letters and special characters, at least 8 characters long.',

                                    statusRender: (value) => {
                                        const getStatus = () => {
                                            if (value && value.length > 12) {
                                                return 'ok';
                                            }
                                            if (value && value.length > 6) {
                                                return 'pass';
                                            }
                                            return 'poor';
                                        };
                                        const status = getStatus();
                                        if (status === 'pass') {
                                            return (
                                                <div style={{ color: token.colorWarning }}>
                                                    强度：中
                                                </div>
                                            );
                                        }
                                        if (status === 'ok') {
                                            return (
                                                <div style={{ color: token.colorSuccess }}>
                                                    强度：强
                                                </div>
                                            );
                                        }
                                        return (
                                            <div style={{ color: token.colorError }}>强度：弱</div>
                                        );
                                    },
                                }}
                                placeholder={'密码: ant.design'}
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入密码！',
                                    },
                                ]}
                            />
                        </>
                    )}
                    {loginType === 'phone' && (
                        <>
                            <ProFormText
                                fieldProps={{
                                    size: 'large',
                                    prefix: <MobileOutlined className={'prefixIcon'} />,
                                }}
                                name="mobile"
                                placeholder={'手机号'}
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入手机号！',
                                    },
                                    {
                                        pattern: /^1\d{10}$/,
                                        message: '手机号格式错误！',
                                    },
                                ]}
                            />
                            <ProFormCaptcha
                                fieldProps={{
                                    size: 'large',
                                    prefix: <LockOutlined className={'prefixIcon'} />,
                                }}
                                captchaProps={{
                                    size: 'large',
                                }}
                                placeholder={'请输入验证码'}
                                captchaTextRender={(timing, count) => {
                                    if (timing) {
                                        return `${count} ${'获取验证码'}`;
                                    }
                                    return '获取验证码';
                                }}
                                name="captcha"
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入验证码！',
                                    },
                                ]}
                                onGetCaptcha={async () => {
                                    message.success('获取验证码成功！验证码为：1234');
                                }}
                            />
                        </>
                    )}
                    <div
                        style={{
                            marginBlockEnd: 24,
                        }}
                    >
                        <ProFormCheckbox noStyle name="autoLogin">
                            自动登录
                        </ProFormCheckbox>
                        <a
                            style={{
                                float: 'right',
                            }}
                        >
                            忘记密码
                        </a>
                    </div>
                </LoginForm>
            </div>
        </ProConfigProvider>
    );
};