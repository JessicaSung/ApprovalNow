import React, { Component } from 'react';
import { Link, IndexLink, withRouter } from 'react-router';
import axios from 'axios';


import InventoryItem from 'InventoryItem';

export default class PurchaseRequisition extends Component {
	constructor() {
		super();
		this.state = {
			inventory: []
		}
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		return axios.get("/api/inventory/supplyrequest").then((response) => {
			console.log(response);
			this.setState({	inventory: response.data });
		});
	}

	handleClick() {
		this.props.router.push('prsubmitsuccessful');
	}

	render() {
		return (
			<div className="pageBlock">	
				<h3>PCE Paragon Solutions, Inc.</h3>
				<h2 className="text-center">Purchase Requisition Form</h2>
				<h4>PO #: </h4>
				<h4>Date: </h4>

				<div className="panel-heading">
	   				<h3 className="panel-title"><strong>Items to be purchased.</strong></h3>
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
							{this.state.inventory.map((item, index) => <InventoryItem key={item._id} item={item} index={index} handleChange={this.handleChange} />)}
						</tbody>
					</table>
					<button onClick={this.handleClick} className="floatRight btn btn-primary btn-lg">Submit</button>
	  			</div>

	  			<Link to="/prsubmitsuccessful">
	  				<h3 className="text-center">Table for signature approvals </h3>
	  			</Link>
				
			</div>
		);
	}
}