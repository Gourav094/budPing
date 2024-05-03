import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetActiveConversation = () => {
	const [conversation, setConversation] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getConversation = async() => {
			setLoading(true);
			try {
				const response =await axios.get("http://localhost:3000/users/active",{
					withCredentials:true,
					headers:{
						Authorization:JSON.parse(localStorage.getItem('token'))
					}
                });
				if (response.error) {
					throw new Error(response.error);
				}
				setConversation(response.data.users);
			} catch (error) {
				console.log(error);
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

        getConversation()
	}, []);

	return {loading,conversation};
};

export default useGetActiveConversation;
