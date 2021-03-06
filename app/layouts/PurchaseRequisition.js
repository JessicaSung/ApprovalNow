import React, { Component } from 'react';
import { Link, IndexLink, withRouter } from 'react-router';
import axios from 'axios';
import InventoryItem from 'InventoryItem';
import InventoryRequested from 'InventoryRequested';


export default class PurchaseRequisition extends Component {
	constructor() {
		super();
		this.state = {
			inventory: []
		}
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		return axios.get('/api/inventory/supplyrequest').then((response) => {
			console.log(response);
			this.setState({	inventory: response.data.inventory });
		});
	}

	handleClick() {
		this.props.router.push('prsubmitsuccessful');
	}

	renderPO() {
		// ADD THIS: axios.get '/api/inventory/purchaserequisition' to display the next transaction number

		const numLength = 0;
		let transNum = (response.data.length + 1).toString();
		while (transNum.length < numLength) transNum = '0' + transNum;

		const formattedTransNum = 'PGP17-' + rows;
	}

	render() {
		console.log(this.state);
		return (
			<div className="pageBlock">	
				<h3>Subsidiary</h3>
				<h2 className="text-center">Purchase Requisition Form</h2>
								
				<form>
					<div className="pageNarrow">
						<h4>PO #: PGP17-007</h4>
						<h4>Date: { Date().split(' ').slice(1,4).join(' ') }</h4>				
						
						<div className="panel panel-default">
							<div className="panel-body">
								<table className="table" id="supplyList">
									<thead>
										<tr>
											<th>Office Supply Item</th>
											<th>Quantity</th>
											<th>Price</th>
											<th>Subtotal</th>
										</tr>																			
									</thead>
									<tbody id="supplyItem">
										{this.state.inventory.map((item, index) => <InventoryRequested key={item._id} item={item} index={index} handleChange={this.handleChange} />)}								
									</tbody>
								</table>
				  			</div>	
						</div>


			  			<div className="panel-body">
							<table className="table" id="purchaseRequisition">
								<thead>
									<tr>
										<th>Department</th>
										<th>Approver</th>
										<th>Date</th>
									</tr>
								</thead>
								
								<tbody id="prApprovers">
									<tr>
										<td>
											Requestor
										</td>
										<td>
											Cecilia Walker
										</td>
										<td>
											 
										</td>
									</tr>

									<tr>
										<td>
											Manager
										</td>
										<td>
											Jon Peterson
										</td>
										<td>
											 
										</td>
									</tr>

									<tr>
										<td>
											Accounting
										</td>
										<td>
											Kimberly Kollar
										</td>
										<td>
											
										</td>
									</tr>
								</tbody>
							</table>
			  			</div>
					</div>
	  			<button onClick={this.handleClick} className="floatRight btn btn-primary btn-lg">Submit</button>		  				  		
				
				</form>				
			</div>
		);
	}
}