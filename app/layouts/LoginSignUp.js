import React, { Component } from 'react';
import axios from 'axios';

export default class LoginSignUp extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			username: '',
			password: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit() {
		return axios.post('/register', { name: name });
		return axios.post('/register', { email: email });
		return axios.post('/register', { username: username });
		return axios.post('/register', { password: password });
	}

	render() {
		return (
			<div className="pageBlock">
				<h3>Create your account</h3><br />
				<form>
					<div className="form-group">
						<label>Name</label>
						<input 
							name="name"
							placeholder="First Last" 
							type="text" 
							className="form-control" 							
							value={this.state.name} 
							onChange={this.handleChange} />
					</div>
					<div className="form-group">
						<label>Email Address</label>
						<input 
							name="email"
							placeholder="first.last@foxconn.com" 
							type="email" 
							className="form-control" 							
							value={this.state.email} 
							onChange={this.handleChange} />
					</div>
					<div className="form-group">
						<label>Choose your username</label>
						<input 
							name="username"
							type="text" 
							className="form-control" 							
							value={this.state.username} 
							onChange={this.handleChange} />
					</div>
					<div className="form-group">
						<label>Create a password</label>
						<input 
							name="password"
							type="password" 
							className="form-control" 							
							value={this.state.password} 
							onChange={this.handleChange} />
					</div>
					<button 
						type="submit" 
						className="btn btn-primary" 
						onClick={this.handleSubmit}>Submit</button>
				</form>
			</div>
		);
	}
}