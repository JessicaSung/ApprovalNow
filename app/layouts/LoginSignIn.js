import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router';

export default class LoginSignIn extends Component {
	constructor(name) {
		super();
		this.state = {
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

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state);

		return axios.post('/auth/login', { 
			username: this.state.username, 
			password: this.state.password 
		}).then((response) => {
			console.log(response);
			if(response.data.isMatch) {
				this.props.onChangeUsername(this.state.username);
				this.props.router.push('supplyform');
				sessionStorage.setItem('username', this.state.username);
				sessionStorage.setItem('name', response.data.name);
			}
		}).catch(function(err) {
			console.error(err);
		});
	}

	validateInputs() {
		const checkList = ['username', 'password'];
		let isValid = true;
		checkList.forEach((key) => {
			if (this.state[key].replace(/ /g,'') === '') {
				isValid = false
			}
		});
		return isValid;
	}

	render() {
		return (
			<div className="pageBlock">
				<h3>Login</h3><br />
				<form method="post" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label>Username</label>
						<input 
						type="text" 
						className="form-control" 
						name='username'
						value={this.state.username}
						onChange={this.handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Password</label>
						<input 
						type="password" 
						className="form-control" 
						name='password'
						value={this.state.password}
						onChange={this.handleChange}
						/>
					</div>
					<button 
					type="submit" 
					className="btn btn-primary"
					disabled={!this.validateInputs()}
					>
						Submit
					</button>
				</form>

				<p className="text-center">
					Not a member?
					<Link to="/signup">
						Join now
					</Link>
				</p>
			</div>
		);
	}
}