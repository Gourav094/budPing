import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { CaptalizeFirstLetter } from "../utils/constant";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = () => {
	const selectedConversation = useSelector(
		(state) => state.conversation?.selectedConversation
	);
	const {theme,userData} = useSelector((state) => state.user);

	
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
		<div className="py-2">
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

			<Messages/>
			
			<MessageInput/>
			
		</div>
	);
};

export default MessageContainer;
