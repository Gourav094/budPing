import { Link, useNavigate } from "react-router-dom"
import Logo from "../assets/logo.png"
import { useState } from "react";
import Loader from "./Loader";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
    const [showPassword,setShowPassword] = useState(true)
    const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
    const navigate = useNavigate()

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

    const handleSubmit = async (e) => {
        setLoading(true)
		e.preventDefault();
		try{
            const response = await axios.post(
                "http://localhost:3000/user/login",
                formData
            );
            console.log(response)
            if(response.data){
                localStorage.setItem("user",JSON.stringify(response.data.userData))
                toast.success("Successfully logged in")
                navigate("/")
            }   
        }
        catch(error){
            console.log("Getting error in signup",error)
            if(error.response.data){
                toast.error("wrong password")
            }
        }
		finally{
            setLoading(false)
        }
	};  
    console.log(showPassword)

  return (
    
    <div className="flex min-h-full flex-col justify-center px-6 py-20 lg:px-8">
        <Toaster/>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-14 w-auto" src={Logo} alt="QuickChat"/>
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input onChange={handleInputChange} value={formData.email} id="email" name="email" type="email" required className="outline-none px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            {/* <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div> */}
                        </div>
                        <div className="mt-2">
                            <input onChange={handleInputChange} value={formData.password} id="password" name="password" type={showPassword ? "text" : "password"}  required className="outline-none px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                        <div className="mt-2">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={showPassword}
                                    onChange={(e) => setShowPassword(e.target.checked)}
                                    className="mr-2"
                                />
                                <span className="text-sm text-gray-700 select-none">Show password</span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            {loading && <Loader/>}
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                Not a member? 
                <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Sign up Now</Link>
                </p>
            </div>
            </div>
  )
}

export default Login