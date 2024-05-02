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
			console.log("socket initialised: ", socket);
			socket.emit("setup", userData);
			socket.on("connected", () => {
				console.log("Connected to server", socket.id);
				setSocketConnected(true);
			});
			socket.on("disconnect", () => {
				console.log("Disconnected from server");
				setSocketConnected(false); // Set connection status to false
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
