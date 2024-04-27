import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Chat from "./components/Chat";
function App() {
	return (
		<BrowserRouter>
			<div>
        <Routes>
          <Route path="/" element={<Body/>}/>
          <Route path="/chat" element={<Chat/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
