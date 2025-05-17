import { Link, useNavigate } from "react-router";
import { FaRegUserCircle, FaRegUser } from "react-icons/fa";
import { BiSolidLogInCircle } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";
import { useContext } from "react";
import AuthContext from "../../AuthContext/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {

    const {handleSubmit} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault();


        const { status, message } = await handleSubmit(`/logout`, {});


        if (status === 200) {
            Swal.fire({
                title: message,
                icon: "success",
                draggable: true
            });

            // console.log('user logout: ', status, message); 

            navigate('/login')
        }
    }


    return (

        <div className="w-full h-[80px] border-b-[2px] border-[#515def]">
            <div className="lg:container mx-auto flex items-center w-full h-full ">
                <div className="flex items-center justify-between w-full h-full">
                    {/* logo wrapper  */}
                    <div className="logo">
                        <Link to={'/'} className="flex items-center gap-3 text-4xl text-[#313131] capitalize"><FaRegUserCircle color="#515def" size='2rem' /> Auth System</Link>
                    </div>


                    {/* navigate wrapper  */}
                    <div className="flex items-center gap-8">
                        <Link to={'/login'} className="text-xl text-[#313131] capitalize font-medium flex items-center gap-3 border-b-[2px] border-[#515def]"><BiSolidLogInCircle color="#515def" size='2rem' /> Login</Link>

                        <Link to={'/register'} className="text-xl text-[#313131] capitalize font-medium flex items-center gap-3 border-b-[2px] border-[#515def]"><BiSolidLogInCircle color="#515def" size='2rem' /> Register</Link>

                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn m-1"><FaRegUser color="#515def" size='2rem' /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><button onClick={handleLogout} className="text-lg text-[#313131] font-medium capitalize flex items-center gap-3"><IoMdLogOut color="#515def" size='2rem' /> logout</button></li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;