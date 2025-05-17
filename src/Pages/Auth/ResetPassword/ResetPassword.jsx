import { useContext, useRef } from "react";
import { useParams } from 'react-router';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router';
import AuthContext from "../../../AuthContext/AuthContext";


const ResetPassword = () => {

    const createPasswordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const navigate = useNavigate();
    const {token} = useParams();
    const {handleSubmit} = useContext(AuthContext)

    // console.log('reset password token: ', token)

    const handleResetPassword = async (e) => {
        e.preventDefault();

        if (createPasswordRef.current.value === confirmPasswordRef.current.value) {

            const body = {
                password: confirmPasswordRef.current.value,
            };

            console.log('confirm password:', confirmPasswordRef.current.value)

            const { status, message } = await handleSubmit(`/reset-password/${token}`, body);


            if (status === 200) {
                Swal.fire({
                    title: message,
                    icon: "success",
                    draggable: true
                });

                // console.log('user logged: ', status, message);

                navigate('/')
            }
        } else {
            console.log('something wrong?')
        }

    }

    return (
        <div className='w-full flex items-center justify-center p-10'>
            <div className="lg:container mx-auto">
                <div className="flex items-center gap-16 justify-between w-full">


                    {/* right wrapper  */}
                    <div className="right_wrapper space-y-4 max-w-[640px] w-full h-auto">
                        <h3 className='text-5xl text-[#313131] font-semibold capitalize'>Reset Password</h3>
                        <p className='text-base text-[#313131] font-medium'>YOur previous password has been reseted. Please set a new password for your account.</p>

                        <form className='space-y-4' onSubmit={handleResetPassword}>

                            <input type="password" ref={createPasswordRef} className='max-w-[640px] w-full h-[56px] border-[1px] border-[#313131] rounded-lg outline-0 pl-3' placeholder='Create Password.....' required />

                            <input type="password" ref={confirmPasswordRef} className='max-w-[640px] w-full h-[56px] border-[1px] border-[#313131] rounded-lg outline-0 pl-3' placeholder='Re-enter Password.....' required />

                            <button className='max-w-[640px] w-full h-[56px] bg-[#515def] rounded-lg flex items-center justify-center text-base text-[#f3f3f3] capitalize font-semibold cursor-pointer'>Reset Password</button>
                        </form>
                    </div>

                    {/* right wrapper  */}
                    <div className="left_wrapper">
                        <img src="/forget_&_reset.png" alt="reset" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;