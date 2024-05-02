	import { IoChatboxEllipsesOutline } from "react-icons/io5";
	import { useDispatch, useSelector } from "react-redux";
	import { CaptalizeFirstLetter } from "../utils/constant";
	import MessageInput from "./MessageInput";
	import Messages from "./Messages";
	import { useEffect } from "react";
	import { addNewMessage } from "../redux/conversationSlice";
	import { useSocket } from "../context/SocketContext";

	const MessageContainer = () => {
		const { socket, selectedChatCompare} = useSocket();
		const selectedConversation = useSelector(
			(state) => state.conversation?.selectedConversation
		);
		const {theme,userData} = useSelector((state) => state.user);
		const dispatch = useDispatch()

		useEffect(() => {
			console.log("in this block will be dispatching messages")
			socket.on("message received",(message) => {
				console.log("bhidduuu checking re", selectedChatCompare)
				if(!selectedChatCompare || selectedChatCompare._id === message.receiverId){
					//give notificaiotn
				}
				else{
					console.log("dispatched messages",message)
					dispatch(addNewMessage(message))
				}
			})
		})
		
		return !selectedConversation ? (
			<div className="flex flex-col gap-4 items-center justify-center h-screen">
				<h1 className="text-2xl pb-2">Welcome {CaptalizeFirstLetter(userData?.fullName)} !!</h1>
				<h3 className="text-xl tracking-wide">
					Select a chat to start messaging
				</h3>
				<span className="text-4xl">
					<IoChatboxEllipsesOutline />
				</span>
			</div>
		) : (
			<div className="py-2 max-h-screen">
				<div
					className="py-2 px-4 rounded flex gap-4 items-center"
					data-theme={theme === "dark" ? "dim" : "nord"}
				>
					<p className="h-8 w-8 text-white bg-green-500 rounded-full flex items-center justify-center">
						{" "}
						{selectedConversation?.fullName[0].toUpperCase()}{" "}
					</p>
					<div>
						<h3 className=" font-medium ">
							{selectedConversation?.fullName}{" "}
						</h3>
						<p className="text-xs text-green-500">online</p>
					</div>
				</div>	

				<Messages />
				
				<MessageInput socket = {socket} selectedChatCompare = {selectedChatCompare}/>
				
			</div>
		);
	};

	export default MessageContainer;
