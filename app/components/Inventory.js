import React, { Component } from 'react';

export default class Inventory extends Component {
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
								<th>Item Name</th>
								<th>Quantity</th>											
							</thead>
							<tbody id="supplyItem"></tbody>
						</table>
		  			</div>
				</div>
			</div>		
		);
	}
}