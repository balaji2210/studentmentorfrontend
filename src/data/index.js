export const signup = (user) => {
	return fetch(`https://myways2210.herokuapp.com/api/v1/signup`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			console.log(err);
		});
};

export const signin = (user) => {
	return fetch(`https://myways2210.herokuapp.com/api/v1/signin`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			return err;
		});
};

export const isAuthenticated = () => {
	if (typeof window == "undefined") {
		return false;
	}
	if (localStorage.getItem("user")) {
		return true;
	} else {
		return false;
	}
};

export const getAdminProjects = (token) => {
	return fetch(`https://myways2210.herokuapp.com/api/v1/admin/projects`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			return err;
		});
};

export const getAdminProject = (id, token) => {
	return fetch(`https://myways2210.herokuapp.com/api/v1/admin/project/${id}`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			return err;
		});
};

export const updateRating = (id, token, ratings) => {
	return fetch(
		`https://myways2210.herokuapp.com/api/v1/admin/projects/rating/${id}`,
		{
			method: "PUT",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(ratings),
		}
	)
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			return err;
		});
};

export const updateProject = (id, token) => {
	return fetch(`https://myways2210.herokuapp.com/api/v1/admin/project/${id}`, {
		method: "PUT",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			return err;
		});
};

export const getAllSelectedProjects = (token) => {
	return fetch(
		`https://myways2210.herokuapp.com/api/v1/admin/projects/selected`,
		{
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	)
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			return err;
		});
};

export const getLoggedInStudentProject = (token) => {
	return fetch(`https://myways2210.herokuapp.com/api/v1/student/projects`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			return err;
		});
};

export const createProject = (token, data) => {
	return fetch(`https://myways2210.herokuapp.com/api/v1/create/project`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(data),
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			return err;
		});
};

export const adminGetUsers = (token) => {
	return fetch(`https://myways2210.herokuapp.com/api/v1/admin/users`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.log(err));
};

export const adminUpdateUser = (id, token) => {
	return fetch(`https://myways2210.herokuapp.com/api/v1/admin/user/${id}`, {
		method: "PUT",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.log(err));
};

export const superUserGetAllProjects = (token) => {
	return fetch(
		`https://myways2210.herokuapp.com/api/v1/admin/projects/superuser`,
		{
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	)
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.log(err));
};
