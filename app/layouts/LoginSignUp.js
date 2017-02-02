import React, { Component } from 'react';

export default class LoginSignUp extends Component {
	render() {
		return (
			<div className="pageBlock">
				<h3>Create your account</h3><br />
				<form method="post" action="/auth/register">
					<div className="form-group">
						<label>Name</label>
						<input type="text" name ="name" className="form-control" placeholder="First Last" />
					</div>
					<div className="form-group">
						<label>Email Address</label>
						<input type="email" name ="email" className="form-control" placeholder="first.last@foxconn.com" />
					</div>
					<div className="form-group">
						<label>Choose your username</label>
						<input type="text" name ="username" className="form-control" />
					</div>
					<div className="form-group">
						<label>Create a password</label>
						<input type="password"  name ="password" className="form-control" />
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}
}