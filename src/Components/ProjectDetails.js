import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getAdminProject, updateProject, updateRating } from "../data";
import { Rating } from "react-simple-star-rating";
import { toast } from "react-toastify";

function ProjectDetails() {
	const { id } = useParams();
	const token = JSON.parse(localStorage.getItem("token"));
	const [project, setProject] = useState("");

	useEffect(() => {
		getAdminProject(id, token).then((data) => {
			setProject(data.project);
			// console.log(data.project);
		});
	}, [id, token]);
	const handleRating = (rate) => {
		updateRating(id, token, { ratings: rate / 20 }).then((data) => {
			if (data.success) {
				toast.success("Rating Updated", {
					position: "top-right",
					theme: "colored",
					autoClose: 1000,
				});
			}
		});
	};

	const handelSelect = (id) => {
		updateProject(id, token).then((data) => {
			if (data.success) {
				toast.success("Project Selected", {
					position: "top-right",
					theme: "colored",
					autoClose: 1000,
				});
			}
		});
	};

	console.log(project.ratings);
	return (
		<>
			{project && (
				<div className="container mt-5 col-md-4">
					<div className="card text-center shadow-5  border">
						<img
							src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
							className="card-img-top"
							alt="Fissure in Sandstone"
						/>
						<div className="card-body">
							<h4 className="card-title">{project.user.name.toUpperCase()}</h4>
							<h4 className="card-subtitle mb-2 text-muted">
								{project.name} Project
							</h4>

							<div className="btn m-2 btn-danger">Reject</div>
							<div
								className="btn m-2 btn-success"
								onClick={() => {
									handelSelect(project._id);
								}}
							>
								Accept
							</div>
						</div>
						<div className="m-2 pb-3">
							<span className="me-3 fa-lg ">Rate</span>
							<Rating initialValue={project.ratings} onClick={handleRating} />
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default ProjectDetails;
