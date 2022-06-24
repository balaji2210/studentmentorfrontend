import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAdminProjects, isAuthenticated } from "../data";

function Admin() {
	const [projects, setProjects] = useState([]);
	const token = JSON.parse(localStorage.getItem("token"));
	const user = JSON.parse(localStorage.getItem("user"));
	const auth = isAuthenticated();
	useEffect(() => {
		getAdminProjects(token).then((data) => {
			setProjects(data.projects);
		});
	}, [token]);

	const navigate = useNavigate();

	return (
		<>
			{auth && user.role === "admin" ? (
				<>
					{projects && projects.length !== 0 ? (
						<div className="container mt-5">
							<div className="row">
								{projects &&
									projects.map((project, i) => (
										<div className="col-lg-3 col-md-6" key={i}>
											<div className="card m-2 text-center">
												<img
													src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
													className="card-img-top"
													alt="Fissure in Sandstone"
												/>
												<div className="card-body">
													<h5 className="card-title">
														{project.user.name.toUpperCase()}
													</h5>
													<p className="card-text">
														{project.name.toUpperCase()}
													</p>
													<Link
														to={`/admin/project/${project._id}`}
														className="btn btn-primary"
													>
														view
													</Link>
												</div>
											</div>
										</div>
									))}
							</div>
						</div>
					) : (
						<div className="pt-5">
							<h2 className="text-center mt-5 pt-5">No Projects to review</h2>
						</div>
					)}
				</>
			) : (
				navigate("/")
			)}
		</>
	);
}

export default Admin;
