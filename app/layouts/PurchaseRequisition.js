import React, { Component } from 'react';
import SupplySelected from 'SupplySelected';

export default class PurchaseRequisition extends Component {
	render() {
		return (
			<div className="pageBlock">	
					<h3>PCE Paragon Solutions, Inc.</h3>
					<h2 className="text-center">Purchase Requisition Form</h2>
					<h4>PO #: </h4>
					<h4>Date: </h4>
					<h3 className="text-center">Table with Supply Selected</h3>
					<h3 className="text-center">Table for signature approvals </h3>
			</div>
		);
	}
}