import React from 'react'
import Signin from '@/Components/Button/Button'
import { Card, Progress, Tabs } from 'antd';
const Login = () => {
    return (
        <>
            {/* <div className="login-container w-full flex flex-row items-center justify-between">
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
                                </form>
                                </div>
                                </div>
                            </div> */}
            <div className="flex flex-row justify-around items-center h-screen gap-56">
                <div className="left-card-wrapper rounded-5 bg-blue-100 gap-2 w-[625px] h-[450px] justify-center px-20 bg-primary-1 shadow-md flex flex-col ">
                    <h2 className="font-segoe-ui text-3xl  font-bold leading-32 tracking-normal text-left mb-10 text-blue-500">SYNECT<span className="text-red-500">I</span>KS</h2>
                    <h1 className="font-segoe-ui text-4xl font-bold leading-11 tracking-tighter text-left mb-5">Workflow Management</h1>
                    <p className='card-text font-segoe-ui text-2xl font-semibold leading-10 tracking-tighter text-left text-gray-400'>
                        Manage your project and the team in easy way.
                    </p>
                </div>
                <form action="http://localhost:3000/main">
                    <div className='login w-96 h-72 flex flex-col justify-between'>
                        <div className='login-bar w-96 h-11 bg-gray-100 p-2'>
                            <h4 className='flex two gap-7 text-black no-underline items-center'>
                                <a href="#" className='text-blue-400'>Login</a> <a href="#" >Signup</a></h4>
                        </div>
                        <div className="flex input-main flex-col gap-7">
                            <input className='input w-80 h-10 p-2 text-center border border-blue-500 font-roboto text-base font-normal leading-6 tracking-normal' placeholder='Username:admin or User'></input>
                            <input type='Password' className='input w-80 h-10 p-2 text-center border border-blue-500 font-roboto text-base font-normal leading-6 tracking-normal' placeholder='Password:Synectiks design'></input>

                        </div>

                        <div className='flex new justify-between mt-5'>
                            <div className="flex cbx gap-1">
                                <input type="checkbox" /> <span> Remember me</span>

                            </div>

                            <a href="#" className="text-blue-500">Forgot your Password?</a>
                        </div>
                        {/* <Signin btnName='SignIn' className='btn' /> */}
                        <input type="submit" value="Sign In" className='cursor-pointer bg-blue-500 text-white px-3 py-2 rounded w-28' />

                    </div>
                </form>
            </div>
        </>
    )
}

export default Login