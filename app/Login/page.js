import React from 'react'
import { Card, Progress, Tabs } from 'antd';
const Login = () => {
    return (
        <>
            <section>
                <div className="login-container w-full flex flex-row items-center justify-between">
                    <Card className="login-left-wrapper p-12 w-full h-full bg-blue-100">
                        <h3 className='text-3xl text-blue-800 font-semibold uppercase mb-2'>Synect<span className='text-red-800'>i</span>ks</h3>
                        <h4 className='text-2xl font-bold'>Workflow Management</h4>
                        <h5 className='w-1/2 font-black font-bold'>Manage your project and the team in easy way</h5>

                    </Card>
                    <div className="login-right-wrapper">
                        <div className="flex flex-col">

                            <div className="btn-wrapper bg-gray-400">
                                <a href="#" className="login-btn text-blue-400">Login</a>
                                <a href="#" className="login-btn">Sign Up</a>
                            </div>

                            <form action="http://localhost:3000/main">
                                <div className='mb-6'>
                                    <input type="email" name="email" id="email" className='border b-2 border-cyan-500' placeholder='username:admin or user' />
                                </div>
                                <div><input type="password" name="password" id="password" className='border b-2 border-cyan-500' placeholder='password:synectiks.design' /></div>
                                <div className="flex flex-row">
                                    <div><input type="checkbox" name="checkbox" id="checkbox" /> <span>Remember me</span></div>
                                    <div><a href="">forgot your password</a></div>
                                </div>
                                <input type="submit" value="Sign In" className='cursor-pointer bg-blue-700 text-white px-3 py-2 rounded'/>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login