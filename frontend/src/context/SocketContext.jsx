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
			const handleConnected = () => {
				setSocketConnected(true);
			};
			const handleDisconnect = () => {
				setSocketConnected(false);
			};
	
			socket.on("connected", handleConnected);
			socket.on("disconnect", handleDisconnect);
	
			return () => {
				socket.off("connected", handleConnected);
				socket.off("disconnect", handleDisconnect);
			};
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
