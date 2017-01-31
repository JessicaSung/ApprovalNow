import React, { Component } from 'react';
import Inventory from 'Inventory';

export default class SupplyForm extends Component {
	render() {
		return (
			<div className="pageBlock">
				<Inventory />
				<button className="floatRight btn btn-primary btn-lg">Add Items</button>
			</div>
		);
	}
}