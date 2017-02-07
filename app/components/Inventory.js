import React, { Component } from 'react';
import axios from 'axios';
import InventoryItem from 'InventoryItem';

export default class Inventory extends Component {
	constructor() {
		super();
		this.state = {
			inventory: [
			     {name: "Pencil", id: 1, qty: 0},
			     {name: "Paper", id: 2, qty: 0}
			]
		}
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		return axios.get("/supplyform").then((response) => {
			console.log(response);
		});
	}

	handleChange(event) {
		let newInventory = this.state.inventory;
		newInventory[event.target.name].qty = event.target.value;
		this.setState({
			inventory: newInventory
		});
	}

	render() {
		return (
			<div>
				<div className="panel panel-primary pageWide">
					<div className="panel-heading">
		   				<h3 className="panel-title"><strong>Enter the quantity for each item requested.</strong></h3>
		  			</div>

		  			<div className="panel-body">
						<table className="table" id="supplyList">
							<thead>
								<tr>
									<th>Item Name</th>
									<th>Quantity</th>
								</tr>																			
							</thead>
							<tbody id="supplyItem">								
								{this.state.inventory.map((item, index) => <InventoryItem key={item.id} item={item} index={index} handleChange={this.handleChange} />)}
							</tbody>
						</table>
		  			</div>
				</div>
			</div>		
		);
	}
}