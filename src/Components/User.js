import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { adminGetUsers, adminUpdateUser } from "../data";

function User() {
	const token = JSON.parse(localStorage.getItem("token"));
	const user = JSON.parse(localStorage.getItem("user"));
	const [users, setUsers] = useState([]);
	const [reload, setReload] = useState(false);
	// const navigate = useNavigate();

	useEffect(() => {
		if (user && user.role === "admin") {
			adminGetUsers(token).then((data) => {
				setUsers(data.users);
				setReload(false);
			});
		}
	}, [reload]);

	const updateUser = (id) => {
		adminUpdateUser(id, token).then((data) => {
			setReload(true);
			if (data.success) {
				toast.success(data.message, {
					position: "top-center",
					theme: "colored",
					autoClose: 1000,
				});
			} else {
				toast.warn(data.message, {
					position: "top-center",
					theme: "colored",
					autoClose: 1500,
				});
			}
		});
	};

	return (
		<>
			<div className="container mt-2">
				<div className="container">
					<div className="list-group list-group-light ">
						{users &&
							users.map((user, i) => (
								<li
									className={
										user._id.toString() !== "62b552ffdf840e05604eb431"
											? `list-group-item d-flex justify-content-between align-items-center`
											: `d-none`
									}
									key={i}
								>
									<div>
										<div className="fw-bold fs-6">{user.name}</div>
										<div className="text-muted fs-6 text-break">
											{user.email}
										</div>
									</div>
									<span
										className={
											user.role === "admin"
												? `badge rounded-pill badge-success`
												: `badge rounded-pill badge-warning`
										}
									>
										{user.role}
									</span>
									<span
										className="btn btn-link btn-sm btn-rounded"
										onClick={() => {
											updateUser(user._id);
										}}
									>
										update
									</span>
								</li>
							))}
					</div>
				</div>
			</div>
		</>
	);
}

export default User;
