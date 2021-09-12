import React from 'react';

import {NavLink} from 'react-router-dom';
import img1 from '../image/img1.jpg';


function Common(props) {
	return (
		<>
			<section id="header" className="" >
				<div className="container-fluid">
					<div className="row">
						<div className="col-10 mx-auto">
							<div className="row mt-5">
								<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" >
									<h1>{props.headline}</h1>
									<p className="my-3 genarel">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a auctor neque. Praesent commodo, massa non vestibulum cursus, sem magna molestie tellus,
									</p>
									<div className="mt-3">
										<NavLink to="/service" className="btn btn-outline-primary br-2" >
											 Get started 
										</NavLink>
									</div>
								</div>
								<div className="col-md-6 order-2 order-lg-1 header-img mt-5">
									<img src={props.imgsrc} className="img-fluid animated" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Common;
