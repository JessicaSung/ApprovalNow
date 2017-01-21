// DEPENDENCIES
// ===============================================
import React, { Component } from 'react';

export default class Main extends Component {
	render() {
		console.log("main...");
		return (
			<div className="container">
				<div className="jumbotron">
					<h2><strong>ApprovalNow</strong></h2>
				</div>

				<div className="row">
					{this.props.children}
				</div>
			</div>
		);
	}
}