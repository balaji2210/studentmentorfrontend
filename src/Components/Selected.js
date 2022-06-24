import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllSelectedProjects, superUserGetAllProjects } from "../data";
import { Rating } from "react-simple-star-rating";
function Selected() {
	const token = JSON.parse(localStorage.getItem("token"));
	const [selected, setSelected] = useState([]);
	const user = JSON.parse(localStorage.getItem("user"));
	useEffect(() => {
		if (user && user._id.toString() === "62b552ffdf840e05604eb431") {
			superUserGetAllProjects(token).then((data) => {
				setSelected(data.projects);
			});
		} else {
			getAllSelectedProjects(token).then((data) => {
				setSelected(data.projects);
			});
		}
	}, [token, user]);

	// console.log(selected);

	return (
		<>
			{selected && selected.length !== 0 ? (
				<div className="container mt-5">
					<div className="row">
						{selected &&
							selected.map((select, i) => (
								<div className="col-lg-3 col-md-6" key={i}>
									<div className="card m-2 text-center">
										<img
											src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
											className="card-img-top"
											alt="Fissure in Sandstone"
										/>
										<div className="card-body text-center">
											<h5 className="card-title">{select.user.name}</h5>
											<p className="card-text">{select.name.toUpperCase()}</p>
											<Link
												to={`/admin/project/${select._id}`}
												className="btn btn-primary btn-block"
											>
												view
											</Link>
											<div className="m-2 pb-3">
												<span className="me-3 fa-lg">Rating</span>
												<Rating initialValue={select.ratings} readonly={true} />
											</div>
											<div className="btn btn-outline-success">
												Selected
												<i className="far fa-check-circle ms-2 fa-lg"></i>
											</div>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
			) : (
				<div className="container mt-5 text-center pt-5">
					<h2>No Projects Yet Selected</h2>
				</div>
			)}
		</>
	);
}

export default Selected;
