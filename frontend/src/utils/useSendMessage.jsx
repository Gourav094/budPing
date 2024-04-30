import  { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast"
import axios from "axios"
import {  addNewMessage } from "../redux/conversationSlice";

const useSendMessage = () => {
    const selectedConversation = useSelector(state => state.conversation.selectedConversation)
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(false)

    const sendMessage = async(message) => {
        setLoading(true)
        try{
            const response = await axios.post(`http://localhost:3000/message/${selectedConversation._id}`, {
                message: message 
            }, {
                headers: {
                    Authorization: JSON.parse(localStorage.getItem('token'))
                }
            });
            if(response.data){
                console.log(response.data)
                dispatch(addNewMessage(response?.data?.message))
            }
        }
        catch(error){
            toast.error(error.message)
        }
        finally{
            setLoading(false)
        }

    }
    return {sendMessage,loading}

};

export default useSendMessage;
