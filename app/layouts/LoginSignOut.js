import React, { Component } from 'react';
import axios from 'axios';

export default class LoginSignOut extends Component {
	componentDidMount() {
		sessionStorage.removeItem('name');
  		sessionStorage.removeItem('username');
	}

	render() {
		return (
			<div className="pageBlock text-center">
				<h3>You have successfully signed out.</h3>
			</div>
		);
	}
}