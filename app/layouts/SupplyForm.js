import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import InventoryItem from 'InventoryItem';


export default class Inventory extends Component {
	constructor() {
		super();
		this.state = {
			inventory: []
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		return axios.get("/api/inventory/").then((response) => {
			console.log(response);
			this.setState({ inventory: response.data });
		});
	}

	handleChange(event) {
		if (event.target.value > -1) {			
			const index = parseInt(event.target.name);
			let newState = {
				...this.state, 
				inventory: [
					...this.state.inventory.slice(0, index),
					{
						...this.state.inventory[index], 
						qty: event.target.value
					},
					...this.state.inventory.slice(index+1)
				]
			}
			this.setState(newState);
		}		
	}

	handleSubmit(event) {
		event.preventDefault();
				
		return axios.post('api/inventory/supplyrequest', {
			inventory: this.state.inventory
		}).then((response) => {
			this.props.router.push('purchaserequisition');
		}).catch(function(err) {
			console.error(err);
		});
	}

	render() {
		return (
			<div className="pageBlock">
				<div className="panel panel-primary pageWide">
					<div className="panel-heading">
		   				<h3 className="panel-title"><strong>Enter the quantity for each item requested.</strong></h3>
		  			</div>

		  			<div className="panel-body">
		  				<form method="post" onSubmit={this.handleSubmit}>
							<table className="table" id="supplyList">
								<thead>
									<tr>
										<th>Item Name</th>
										<th>Quantity</th>
									</tr>																			
								</thead>
								<tbody id="supplyItem">								
									{this.state.inventory.map((item, index) => <InventoryItem key={item._id} item={item} index={index} handleChange={this.handleChange} />)}
								</tbody>
							</table>
							<button type="submit" className="floatRight btn btn-primary btn-lg">Add Items</button>
						</form>
		  			</div>
				</div>
			</div>		
		);
	}
}