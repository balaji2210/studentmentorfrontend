import React from "react";

import { Link, useNavigate } from "react-router-dom";

import brand from "../Images/image (2).png";
import { isAuthenticated } from "../data";
const Navbar = () => {
	const user = JSON.parse(localStorage.getItem("user"));
	let auth = isAuthenticated();
	const navigate = useNavigate();

	const signOut = () => {
		localStorage.removeItem("user");
		localStorage.removeItem("token");
		// window.location.reload();
		navigate("/");
	};

	return (
		<>
			<nav className="navbar navbar-expand-md navbar-light bg-light px-5">
				<Link className="navbar-brand me-2" to="/">
					<img src={brand} alt="brandicon" height={"50px"} className="me-3" />
					Myways
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-mdb-toggle="collapse"
					data-mdb-target="#navbarButtonsExample"
					aria-controls="navbarButtonsExample"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<i className="fas fa-bars"></i>
				</button>

				<div className="collapse navbar-collapse" id="navbarButtonsExample">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item"></li>
					</ul>

					<div className="d-flex align-items-center">
						{auth && user ? (
							<>
								{auth && user.role === "admin" ? (
									<>
										<Link to="/admin">Admin</Link>
										<Link className="nav-link active" to="/selected">
											Selected
										</Link>
										<>
											{user._id.toString() === "62b552ffdf840e05604eb431" ? (
												<Link className="nav-link active" to="/admin/users">
													Users
												</Link>
											) : (
												""
											)}
										</>
									</>
								) : (
									<Link className="nav-link active" to="/dashboard">
										Dashboard
									</Link>
								)}

								<Link
									to="/signin"
									onClick={() => {
										signOut();
									}}
									className="nav-link px-3 me-2"
								>
									SignOut
								</Link>
							</>
						) : (
							<>
								<Link to="/about" className="nav-link px-3 me-2">
									About
								</Link>
								<Link to="/signup" className="nav-link px-3 me-2">
									Signup
								</Link>
								<Link to="/signin" className="nav-link px-3 me-2">
									SignIn
								</Link>
							</>
						)}
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
