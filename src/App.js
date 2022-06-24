import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import Admin from "./Components/Admin";
import Selected from "./Components/Selected";
import ProjectDetails from "./Components/ProjectDetails";
import About from "./Components/About";
import User from "./Components/User";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<ToastContainer />
				<Routes>
					<Route index path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/signin" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/admin" element={<Admin />} />
					<Route path="/selected" element={<Selected />} />
					<Route path="/admin/project/:id" element={<ProjectDetails />} />
					<Route path="/admin/users" element={<User />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
