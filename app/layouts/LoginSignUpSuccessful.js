import React, { Component } from 'react';

export default class LoginSignUpSuccessful extends Component {
	componentWillMount() {
		if (this.props.username === '') {
			this.props.router.push('/');
		}
	}

	render() {		
		return (
			<div className="pageBlock">
				<h3>You have successfully created an account.</h3>
				<h3>Please write down your username and password in a safe place.</h3>
			</div>
		);
	}
}