import React from 'react';

import {NavLink} from 'react-router-dom';

function Card(props) {
	return (
		<div className="col-md-4 mx-auto">
			<div className="card"  >
			  <div className="img">
				<img src={props.img} className="card-img-top" alt={props.img} />
			  </div>
			  <div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
			  </div>
			</div>
		</div>
	);
}

export default Card;