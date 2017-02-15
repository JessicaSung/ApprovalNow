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
		return axios.get("/api/inventory/supplyrequest").then((response) => {
			console.log(response);
			this.setState({	inventory: response.data.inventory });
		});
	}

	handleClick() {
		this.props.router.push('prsubmitsuccessful');
	}

	render() {
		console.log(this.state);
		return (
			<div className="pageBlock">	
				<h3>PCE Paragon Solutions, Inc.</h3>
				<h2 className="text-center">Purchase Requisition Form</h2>
								
				<form>
					<div className="pageNarrow">
						<h4>PO #: </h4>
						<h4>Date: </h4>				
						
						<div className="panel panel-default">
							<div className="panel-body">
								<table className="table" id="supplyList">
									<thead>
										<tr>
											<th>Office Supply Item</th>
											<th>Quantity</th>
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