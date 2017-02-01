import React, { Component } from 'react';

export default class LoginSignIn extends Component {
	render() {
		return (
			<div className="pageBlock">
				<h3>Account Login</h3><br />
				<form method="post">
					<div className="form-group">
						<label>Username</label>
						<input type="text" className="form-control" />
					</div>
					<div className="form-group">
						<label>Password</label>
						<input type="password" className="form-control" />
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}
}