import React, { Component } from 'react';

export default class InventoryItem extends Component {
	render() {
		return (
			<tr>
				<td>
					{this.props.item.item}
				</td>
				<td>
					<input 
						name = {this.props.index}
						type = "number" 
						value = {this.props.item.qty}
						onChange = {this.props.handleChange}
					/>
				</td>
			</tr>
		);
	}
}