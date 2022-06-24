import React from "react";
import { useNavigate } from "react-router";
import "./Home.css";

function Home() {
	const navigate = useNavigate();
	return (
		<>
			<section id="hero">
				<div className="container mt-5">
					<div className="row">
						<div className="col-lg-6">
							<div className="content">
								Student Project Management and Review Platform
							</div>
							<div className="row g-3 align-items-center my-4">
								<div
									className="col-md-3   btn btn-lg w-50 btn-primary"
									onClick={() => {
										navigate("/signup");
									}}
								>
									GET STARTED
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="image ps-5"></div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Home;
