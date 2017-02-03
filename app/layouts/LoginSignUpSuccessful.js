import React, { Component } from 'react';

export default class LoginSignUpSuccessful extends Component {
	render() {
		return (
			<div className="pageBlock">
				<h3>You have successfully created an account.  Click Sign In above to log in</h3>
				<h3>Please write down your username and password in a safe place.</h3>
			</div>
		);
	}
}