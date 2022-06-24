import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { createProject, getLoggedInStudentProject } from "../data";

function Dashboard() {
	const token = JSON.parse(localStorage.getItem("token"));
	// const user = JSON.parse(localStorage.getItem("user"));
	// const auth = isAuthenticated();
	const [project, setProject] = useState([]);
	const [name, setName] = useState("");
	const [skills, setSkils] = useState("");
	const [reload, setReload] = useState(false);
	useEffect(() => {
		getLoggedInStudentProject(token).then((data) => {
			setProject(data.projects);
			setReload(false);
		});
	}, [token, reload]);

	const handelSubmit = (e) => {
		e.preventDefault();
		let inputSkills = skills.split(",");
		inputSkills = inputSkills.map((ele) => {
			return ele.toLowerCase();
		});
		createProject(token, { name, skills: inputSkills }).then((data) => {
			if (data.success) {
				setReload(true);
				toast.success("Project subbmited", {
					position: "top-right",
					theme: "colored",
					autoClose: 1000,
				});
			}
		});
	};

	return (
		<div className="container m-md-5 ">
			<div className="row">
				{project && project.length !== 0 ? (
					<>
						<div>
							<div className="card my-5">
								<h1 className="text-center ">Project Already Submitted</h1>
							</div>
						</div>
						{project &&
							project.map((proj) => (
								<div className="col-lg-3 col-md-6" key={proj._id}>
									<div className="card m-2 text-center">
										<img
											src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
											className="card-img-top"
											alt="Fissure in Sandstone"
										/>
										<div className="card-body text-center">
											<h5 className="card-title">
												{proj.user.name.toUpperCase()}
											</h5>
											<p className="card-text">{proj.name.toUpperCase()}</p>

											{proj.isSelected === "accepted" ? (
												<div className="btn btn-outline-success mt-3">
													Selected
													<i className="far fa-check-circle ms-2 fa-lg"></i>
												</div>
											) : (
												<div className="btn btn-outline-warning mt-3">
													Pending<i className="far fa-clock ms-2 fa-lg"></i>
												</div>
											)}
										</div>
									</div>
								</div>
							))}
					</>
				) : (
					<div className="container p-5  col-lg-6 mt-5">
						<h3 className="text-center">Project Submission Form</h3>
						<div className="mt-3">
							<form onSubmit={handelSubmit}>
								<div className="mb-3">
									<label className="form-label">Project Name</label>
									<input
										type="text"
										className="form-control"
										placeholder="Name"
										value={name}
										onChange={(e) => {
											setName(e.target.value);
										}}
									/>
								</div>
								<div className="mb-3">
									<label className="form-label">
										You can Enter One Or Multiple Skills(Enter Multipel Skills
										in this format javascript,python,java)
									</label>
									<input
										type="text"
										className="form-control"
										placeholder="Enter Multipel Skills in this format javascript,python,java"
										value={skills}
										onChange={(e) => {
											setSkils(e.target.value);
										}}
									/>
								</div>

								<button type="submit" className="btn btn-primary">
									Submit
								</button>
							</form>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Dashboard;
