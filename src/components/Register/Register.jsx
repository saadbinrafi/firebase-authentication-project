import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/Authprovider';






const Register = () => {
    const { registerUser, setUser } = useContext(AuthContext)

    const [error, setError] = useState("");
    const [emailError, setEmailError] = useState("")


    const handleRegister = (e) => {
        e.preventDefault()

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if(!/mail\.com$/.test(email)){
            setEmailError("your mail must end with email, gmail, yahooMail, .mail ")
            return
        }

        if (password.length < 6) {
            setError("password must be a 6 character or longer")
            return
        }
        if (password !== confirmPassword) {
            setError("sorry password didn't match")
            return
        }
        if (!/\d.*\d/.test(password)){
            setError("password must end with at last 2 number")
            return
        }

        setError(" ")
        setEmailError(" ")
        console.log(email, password)
        registerUser(email, password)

        .then(result=> {
            setUser(result.user)
        })
        .catch(error => setError(error.message.split("/")[1]))
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
                            {
                                emailError && <small className='text-red-600'>{emailError}</small>
                            }
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
                            {
                                error && <small className='text-red-600'>{error}</small>
                            }
                            <button type='submit' className='btn btn-primary w-full lg:mt-6'>Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>


    );
};

export default Register;