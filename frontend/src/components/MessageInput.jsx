import  { useState } from "react";
import { MdOutlineAttachFile } from "react-icons/md";
import Loader from "./Loader"
import useSendMessage from "../utils/useSendMessage";
import { IoSend } from "react-icons/io5";

const MessageInput = () => {
    const {loading,sendMessage} = useSendMessage()
    const [inputMessage,setInputMessage] = useState("")

    const handleSubmit = async(e) => {
		e.preventDefault()
        if(inputMessage === ""){
            return
        }        
        await sendMessage(inputMessage)
        setInputMessage("")
	}

	return (
		<form
			className="mx-4 flex items-center  rounded-lg px-4 bg-gray-400 bg-opacity-15"
			onSubmit={handleSubmit}
		>
			<button className="inset-y-0 end-0">
				<MdOutlineAttachFile />
			</button>
			<input
				className=" py-3 px-2 w-full outline-none bg-transparent"
				placeholder="Send a message"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
				type="text"
			/>
			<button className="inset-y-0 end-0">
				{loading ? <Loader/> : <IoSend />}
			</button>
		</form>
	);
};

export default MessageInput;
