import React, { Component } from 'react';

export default class Main extends Component {
	render() {
		console.log("main...");
		return (
			<div>
				{this.props.children}
			</div>		
		);
	}
}