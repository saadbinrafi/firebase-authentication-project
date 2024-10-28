import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/Authprovider';





const Register = () => {
    const {registerUser} = useContext(AuthContext)


    const handleRegister = (e) => {
        e.preventDefault()
        
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        console.log(email,password)
        registerUser(email, password)
    }

    

    return (
        <div>
            <div className='text-center text-3xl p-2 my-4'>
                <h1>Please Register</h1>
            </div>

            <div className='w-[60%] mx-auto border-2 border-red-500 p-2 rounded-xl'>
                <form onSubmit={handleRegister}>
                    <div className='lg:flex w-full gap-4'>
                        <div className='w-full'>
                            <div>
                                <p>Name</p>
                                <input type="name" name='name' placeholder="Type here" className="input input-bordered w-full " />
                            </div>
                            <br />
                            <div>
                                <p>Photo</p>
                                <input type="photo" name='photo' placeholder="input your picture" className="input input-bordered w-full " />
                            </div>
                            <br />
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
                            <div>
                                <p>Confirm Password</p>
                                <input type="confirmPassword" name='confirmPassword' placeholder="Type here" className="input input-bordered w-full" />
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

export default Register;