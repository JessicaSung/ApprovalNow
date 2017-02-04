import React, { Component } from 'react';
import Nav from 'Nav';

export default class Main extends Component {
	constructor() {
		super();
		this.state = {
 			username: ''
		}
		this.onChangeUsername = this.onChangeUsername.bind(this);
	}

	onChangeUsername(username) {
		this.setState({username});
	}

	render() {
		console.log("main...");
		const childrenWithProps = React.Children.map(this.props.children,
	     	(child) => React.cloneElement(child, {
		       username: this.state.username,
		       onChangeUsername: this.onChangeUsername
	     	})
	    );
		return (
			<div className="container">
				<Nav username={this.state.username}/>
				<div className="pageNarrow" style={{clear: 'both'}}>
					{childrenWithProps}
				</div>				
			</div>		
		);
	}
}