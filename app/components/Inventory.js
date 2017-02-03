import React, { Component } from 'react';

var state = {
	inventory: [
	     {name: "Pencil", id: 1},
	     {name: "Paper", id: 2}
	]
}

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
							<tbody id="supplyItem">
								{this.state.inventory.map(function(item) {
									return (
										<InventoryItem item={item} />
									)
								})}
							</tbody>
						</table>
		  			</div>
				</div>
			</div>		
		);
	}
}