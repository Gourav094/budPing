import { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";

const SocketContext = createContext();
export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
	const socket = io("http://localhost:3000"); // Initialize sock      et
	const [selectedChatCompare, setSelectedChatCompare] = useState(null);
	const [socketConnected, setSocketConnected] = useState(false);
	const { userData } = useSelector((state) => state.user);

	useEffect(() => {
		if (userData) {
			socket.emit("setup", userData);
			socket.on("connected", () => {
				setSocketConnected(true);
			});
			socket.on("disconnect", () => {
				setSocketConnected(false); 
			});
		}
	}, [socket, userData]);

	return (
		<SocketContext.Provider
			value={{
				socket,
				selectedChatCompare,
				setSelectedChatCompare,
				socketConnected,
			}}
		>
			{children}
		</SocketContext.Provider>
	);
};
