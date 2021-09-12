import React from 'react';

import {NavLink} from 'react-router-dom';
import img1 from '../../image/img1.jpg';
import Common from '../common';

function Home() {
	return (
		<>
			<Common headline= "Grow your business" imgsrc={img1} />
		</>
	);
}

export default Home;

/* 
			<section id="header" className="" >
				<div class="container">
					<div class="row">
						<div class="col-10 mx-auto">
						
						</div>
					</div>
				</div>
			</section>

 */
