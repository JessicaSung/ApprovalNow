import React, { Component } from 'react';

export default class InventoryItem extends Component {
	render() {
		return (
			<div className="container">
				<Nav />
				<div className="pageNarrow" style={{clear: 'both'}}>
					{this.props.children}
				</div>				
			</div>		
		);
	}
}