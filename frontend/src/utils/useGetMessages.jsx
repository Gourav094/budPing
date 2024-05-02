import  { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import axios from "axios"
import {setMessages} from "../redux/conversationSlice"
import { useSocket } from '../context/SocketContext'

const useGetMessages = () => {
    const [loading,setLoading] = useState(false)
    const { socket,setSelectedChatCompare} = useSocket();
    const {selectedConversation,messages} = useSelector(state => state.conversation)
    const dispatch = useDispatch()
    useEffect(() => {
        const getMessages = async() => {
            try{
                setLoading(true)
                const response = await axios.get(
                    `http://localhost:3000/message/${selectedConversation._id}`,
                    {
                        headers: {
                            Authorization: JSON.parse(
                                localStorage.getItem("token")
                            ),
                        },
                    }
                );
                console.log(response.data)
                if(response.data){
                    dispatch(setMessages(response?.data))
                }
                socket.emit("join chat",selectedConversation._id)
            }catch(error){
                console.log("getting error while fetching messages",error)
            }
            finally{
                setLoading(false)
            }
        }

        if(selectedConversation){
            getMessages()
            setSelectedChatCompare(selectedConversation._id)
        }
    },[selectedConversation,socket,dispatch])

    return {loading,messages}
}

export default useGetMessages