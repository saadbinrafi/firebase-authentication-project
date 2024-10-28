import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/Authprovider';

const Login = () => {
    const {loginUser} = useContext(AuthContext)




    const handleLogin = (e) => {
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password,)
        loginUser(email, password)
    }


    return (
        <div>
            <div className='text-center text-3xl p-2 my-4'>
                <h1>Please Login</h1>
            </div>

            <div className='w-[50%] lg:w-[40%] mx-auto border-2 border-red-500 p-2 rounded-xl'>
                <form onSubmit={handleLogin}>
                    <div className='flex flex-col w-full gap-4'>
                        <div className='w-full'>

                            <div>
                                <p>Email</p>
                                <input type="email" name='email' placeholder="Type here" className="input input-bordered w-full " />
                            </div>
                            <br />

                        </div>
                        <div className='w-full'>
                            <div>
                                <p>Password</p>
                                <input type="password" name='password' placeholder="Type here" className="input input-bordered w-full " />
                            </div>

                            <br />
                            <button type='submit' className='btn btn-primary w-full lg:mt-6'>Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;