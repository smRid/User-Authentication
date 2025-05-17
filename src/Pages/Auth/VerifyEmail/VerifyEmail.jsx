import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import AuthContext from "../../../AuthContext/AuthContext";
import Swal from "sweetalert2";

const VerifyEmail = () => {

    const { token } = useParams();
    const { handleSubmit } = useContext(AuthContext);
    const navigate = useNavigate();

    // console.log('verify email token', token)

    const handleVerifyEmail = async (e) => {
        e.preventDefault();

        const { status, message } = await handleSubmit(`/verify-email/${token}`, {});


        if (status === 200) {
            Swal.fire({
                title: message,
                icon: "success",
                draggable: true
            });

            // console.log('verify email: ', status, message);

            navigate('/login') // go to the login page
        }

    }

    return (
        <div className='w-full flex items-center justify-center p-10'>
            <div className="lg:container mx-auto">
                <div className="flex items-center gap-16 justify-between w-full">


                    {/* right wrapper  */}
                    <div className="right_wrapper space-y-4 max-w-[640px] w-full h-auto">
                        <h3 className='text-5xl text-[#313131] font-semibold capitalize'>verify email</h3>
                        <p className='text-base text-[#313131] font-medium'>An authentication link has been sent to your email</p>

                        <form className='space-y-4' onSubmit={handleVerifyEmail}>

                            <button className='max-w-[640px] w-full h-[56px] bg-[#515def] rounded-lg flex items-center justify-center text-base text-[#f3f3f3] capitalize font-semibold cursor-pointer'>verify email</button>
                        </form>
                    </div>

                    {/* right wrapper  */}
                    <div className="left_wrapper">
                        <img src="/login_&_verify.png" alt="verify email" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyEmail;