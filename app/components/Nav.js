import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export default class Nav extends Component {
	render() {
		return (
			<div className="pageNarrow">

				<h3 style={{float: 'left'}}>Foxconn</h3>

				<div className="header clearfix" style={{float: 'right'}}>
			        <nav>
			          <ul className="nav nav-pills pull-right">
			            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink></li>
			            <li><Link to="/signup" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Sign Up</Link></li>
			            <li><Link to="/signin" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Sign In</Link></li>
			            <li><Link to="/logout" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Logout</Link></li>
			          </ul>
			        </nav>
	      		</div>

			</div>		
		);
	}
}