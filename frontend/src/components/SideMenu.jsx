import { useDispatch, useSelector } from "react-redux";
import Logo from "../assets/logo.png"
import { IoLogOutOutline } from "react-icons/io5";
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { addUser, userTheme } from "../redux/userSlice";
import toast from "react-hot-toast"
import { MdOutlineColorLens } from "react-icons/md";
const SideMenu = () => {
    const {theme,userData} = useSelector((state) => state.user);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleTheme = async () => {
        if(theme === "dark"){
            dispatch(userTheme("light"))
        }
        else dispatch(userTheme("dark"))
    }

    const handleLogout = async() => {
        try{    
            const response = await axios.post("http://localhost:3000/user/logout",)

            if(response.data){
                toast.success("Logout successfully")
            }
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            dispatch(addUser(null))
            navigate("/")
        }catch(error){
            console.log(error)
        }
    }

	return (
		<div className="w-14 flex flex-col items-center justify-between h-screen py-4" data-theme={theme === "dark" ? "dim" : "nord"}>
			<div>
				<img className="h-8" src={Logo} alt="logo"/>
			</div>
			<div className="flex flex-col items-center gap-3">
                <span className="text-2xl hover:text-blue-500 cursor-pointer" onClick={handleTheme}><MdOutlineColorLens /></span>
                <span className="text-2xl hover:text-blue-500 cursor-pointer" onClick={handleLogout}><IoLogOutOutline /></span>
				<p className="h-8 w-8 text-white bg-blue-500 rounded-full flex items-center justify-center cursor-pointer">
					{userData?.fullName[0].toUpperCase()}
				</p>
			</div>
		</div>
	);
};

export default SideMenu;
