import React from "react";

import "./About.css";

import mern1 from "../Images/mern1.webp";

import solutions2 from "../Images/fixing.webp";

function About() {
	return (
		<>
			<section id="about">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="content mt-5">
								Hi,I am Balaji a Full Stack Web Developer
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="solution-1">
				<div className="container container1">
					<div className="row mb-5">
						<div className="col-lg-6 ">
							<h1 className="action-title mt-5 pt-5 ps-5 pb-2">
								Technologies{" "}
							</h1>

							<div>
								<div className="d-flex ps-5">
									<div>
										<div className="circle shadow-2">
											<i className="fas fa-2x fa-check p-1"></i>
										</div>
									</div>
									<div>
										<h6 className="mt-2 text ms-3">ReactJs,React-Router-Dom</h6>
									</div>
								</div>
								<div className="d-flex mt-3 ps-5">
									<div>
										<div className="circle shadow-2">
											<i className="fas fa-2x fa-check p-1"></i>
										</div>
									</div>
									<div>
										<h6 className="mt-2 text ms-3">Mongoose,MongoDB</h6>
									</div>
								</div>
								<div className="d-flex mt-3 ps-5">
									<div>
										<div className="circle shadow-2">
											<i className="fas fa-2x fa-check p-1"></i>
										</div>
									</div>
									<div>
										<h6 className="mt-2 text ms-3">ExpressJs,NodeJS</h6>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-6 text-center pb-5">
							<img
								src={mern1}
								alt="solutions1"
								width={"300px"}
								className="m-lg-5 pt-5  solutions1"
							/>
						</div>
					</div>
				</div>
			</section>
			<section id="solution-2">
				<div className="container container1">
					<div className="row mt-3">
						<div className="col-lg-6 text-center">
							<img
								src={solutions2}
								width={"300px"}
								className="m-lg-5 costoptimization pt-5"
								alt="costoptimization"
							/>
						</div>
						<div className="col-lg-6 text-center">
							<h1 className="action-title mt-5 pb-5">Overview</h1>

							<div>
								<div className="d-flex">
									<div>
										<div className="circle shadow-2">
											<i className="fas fa-2x fa-check p-1"></i>
										</div>
									</div>
									<div>
										<h6 className="mt-2 text ms-3">
											This Projects is Student project management and Review
											platform
										</h6>
									</div>
								</div>
								<div className="d-flex mt-3">
									<div>
										<div className="circle shadow-2">
											<i className="fas fa-2x fa-check p-1"></i>
										</div>
									</div>
									<div>
										<h6 className="mt-2 text ms-3">
											Each Student Registered is mapped to the Mentor have
											skills same as the Student
										</h6>
									</div>
								</div>
								<div className="d-flex mt-3">
									<div>
										<div className="circle shadow-2">
											<i className="fas fa-2x fa-check p-1"></i>
										</div>
									</div>
									<div>
										<h6 className="mt-2 text ms-3 pb-5">
											Challenging part of the project was to map student
											registered to the right mentor and updating project status
										</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default About;
