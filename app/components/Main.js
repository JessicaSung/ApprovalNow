import React, { Component } from 'react';
import Nav from 'Nav';

export default class Main extends Component {
	render() {
		console.log("main...");
		return (
			<div className="container">
				<Nav />
				<div style={{clear: 'both'}}>
					{this.props.children}
				</div>				
			</div>		
		);
	}
}