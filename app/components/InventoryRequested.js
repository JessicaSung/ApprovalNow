import React, { Component } from 'react';

export default class InventoryRequested extends Component {
	render() {
		// console.log(this.props.item)
		return (
			<tr>
				<td>
					{this.props.item.item}
				</td>
				<td>
					{this.props.item.qty}
				</td>
			</tr>
		);
	}
}