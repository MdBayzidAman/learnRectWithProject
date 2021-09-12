import React from 'react';

import Card from './card';
import img2 from '../../image/img2.jpg'
import img3 from '../../image/img3.jpg'
import img4 from '../../image/img4.jpg'
import img5 from '../../image/img5.jpg'

function Sevice() {
	
	const cardInfo=[
		{img:img2, title:"Web Development"},
		{img:img3, title:"Web Development"},
		{img:img5, title:"Web Development"},
		
		{img:img4, title:"Web Development"},
		{img:img2, title:"Web Development"},
		{img:img3, title:"Web Development"},
	];
	
	return (
	<>
		<div>
			<h1 className="mt-5 text-center" >Our Services.</h1>
		</div>
		<div className="container-fluid mt-5" >
			<div className="row">
				<div className="col-10 mx-auto">
					<div className="row gy-4">
						{
							cardInfo.map((data, index)=>{
								return <Card key={index} title={data.title} img={data.img} />
							})
						}
					</div>
				</div>
			</div>
		</div>
	</>
	
	);
}

export default Sevice;