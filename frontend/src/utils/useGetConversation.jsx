import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {useDispatch} from "react-redux"
import {addAllConversation} from "../redux/conversationSlice"
const useGetConversation = () => {
	const [allConversation, setAllConversation] = useState([]);
	const [load, setLoad] = useState(false);
	const dispatch = useDispatch()
	useEffect(() => {
		const getAllConversation = async() => {
			setLoad(true);
			try {
				const response =await axios.get("http://localhost:3000/users",{
					withCredentials:true,
					headers:{
						Authorization:JSON.parse(localStorage.getItem('token'))
					}
                });
				
				if (response.error) {
					throw new Error(response.error);
				}
				setAllConversation(response.data.users);
				dispatch(addAllConversation(response.data.users))
			} catch (error) {
				console.log(error);
				toast.error(error.message);
			} finally {
				setLoad(false);
			}
		};

        getAllConversation()
	}, []);

	return {load,allConversation};
};

export default useGetConversation;
