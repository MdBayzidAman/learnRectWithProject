import React from 'react';

import {useState} from 'react';

function Contact() {
	
	
	const inputValue=(event)=>{
		const {name, value}=event.target;
		setVal((preVal)=>{
			return{
				...preVal,
				[name]:value,
			};
		});
	};
	
	const [val, setVal]=useState({
		name:'',
		phone:'',
		email:'',
		msg:'',
	});
	
	
	const formSubmit=(e)=>{
		e.preventDefault();
		alert(`Name is ${val.name}. Phone Number is ${val.phone}. Email is ${val.email}. Massage is ${val.msg}.`);
	};
	
	
	
	return (
	<>
		<div className="my-5" >
			<h1 className="text-center" >Contact Us</h1>
		</div>
		<div className="container">
			<div className="row">
				<div className="col-md-6 col-10 mx-auto">
				  <form onSubmit={formSubmit} >
					<div className="mb-3">
					  <label for="name" className="form-label">Full Name</label>
					  <input onChange={inputValue} name="name" value={val.name} type="text" className="form-control" id="name" placeholder="Full Name" />
					</div>
					<div className="mb-3">
					  <label for="phone" className="form-label">Phone Number</label>
					  <input onChange={inputValue} name="phone" value={val.phone}  type="number" className="form-control" id="phone" placeholder="Phone Number" />
					</div>
					<div className="mb-3">
					  <label for="email" className="form-label">Email address</label>
					  <input onChange={inputValue} name="email" value={val.email}  type="email" className="form-control" id="email" placeholder="name@example.com" />
					</div>
					
					<div className="mb-3">
					  <label for="exampleFormControlTextarea1" className="form-label">Massage</label>
					  <textarea onChange={inputValue} name="msg" value={val.msg}  className="form-control" id="exampleFormControlTextarea1" placeholder="Write Massage" rows="3"></textarea>
					</div>
					<div className="mb-3">
					  	<button type="submit" className="btn btn-outline-primary" >
						Submit Massage
						</button>
					</div>
				  </form>
				</div>
			</div>
		</div>
	</>
	);
}

export default Contact;