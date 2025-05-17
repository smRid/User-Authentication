import React, { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router';
import AuthContext from '../../../AuthContext/AuthContext';
import Swal from 'sweetalert2'

const Register = () => {

    const { handleSubmit } = useContext(AuthContext);

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();


    const handleRegister = async (e) => {
        e.preventDefault();

        const body = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        const { status, message } = await handleSubmit('/register', body);

        if (status === 201) {
            Swal.fire({
                title: message,
                icon: "success",
                draggable: true
            });
            // console.log('user register message: ', message)

            // clear ref 
            nameRef.current.value = '';
            emailRef.current.value = '';
            passwordRef.current.value = '';

            navigate('/login') // go to the login page
        }
    }

    return (
        <div className='w-full flex items-center justify-center p-10'>
            <div className="lg:container mx-auto">
                <div className="flex items-center gap-16 justify-between w-full">
                    {/* left wrapper  */}
                    <div className="left_wrapper">
                        <img src="/register.png" alt="register" />
                    </div>

                    {/* right wrapper  */}
                    <div className="right_wrapper space-y-4 max-w-[640px] w-full h-auto">
                        <h3 className='text-5xl text-[#313131] font-semibold capitalize'>Register</h3>
                        <p className='text-base text-[#313131] font-medium'>Let's get you all set up so you can access your personal account</p>

                        <form className='space-y-4' onSubmit={handleRegister}>
                            <input type="text" ref={nameRef} className='max-w-[640px] w-full h-[56px] border-[1px] border-[#313131] rounded-lg outline-0 pl-3' placeholder='Your Name.....' required />

                            <input type="email" ref={emailRef} className='max-w-[640px] w-full h-[56px] border-[1px] border-[#313131] rounded-lg outline-0 pl-3' placeholder='Your Email.....' required />

                            <input type="password" ref={passwordRef} className='max-w-[640px] w-full h-[56px] border-[1px] border-[#313131] rounded-lg outline-0 pl-3' placeholder='Your Password.....' required />

                            <button className='max-w-[640px] w-full h-[56px] bg-[#515def] rounded-lg flex items-center justify-center text-base text-[#f3f3f3] capitalize font-semibold cursor-pointer'>create account</button>
                        </form>

                        <p className='max-w-[640px] w-full h-auto text-sm text-[#313131] font-normal'>Already have an account? <Link to={'/login'} className='text-red-500 font-medium'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;