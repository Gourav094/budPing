import {useDispatch, useSelector} from "react-redux"
import { selectConversation } from "../redux/conversationSlice";
import {ConversationShimmer} from "./Shimmer";

const Conversation = ({ loading,conversation }) => {
	const dispatch = useDispatch()
	const selectedConversation = useSelector(state => state.conversation?.selectedConversation);

	return loading ? (
			<ConversationShimmer/>
	) : (
		conversation && conversation.map((user) => (
			<div key={user._id} onClick={() => dispatch(selectConversation(user))}>
				<div className={`p-2 flex items-center gap-4 hover:bg-gray-400 hover:bg-opacity-10  cursor-pointer ${selectedConversation?._id === user._id && "bg-gray-400 bg-opacity-15 "}`}>
					<p className="h-8 w-8 text-white bg-green-500 rounded-full flex items-center justify-center">{user?.fullName[0].toUpperCase()}</p>
					<div>
						<h3 className="text-g font-medium ">{user.fullName}</h3>
						<p className="text-xs text-gray-500">
							Hii this is new message
						</p>
					</div>
				</div>
			</div>
		))
	);
};

export default Conversation;