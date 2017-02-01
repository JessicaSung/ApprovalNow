import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export default class Nav extends Component {
	render() {
		return (
			<div className="pageNarrow">

				<h3 style={{float: 'left'}}>Foxconn</h3>

				<div className="header clearfix">
			        <nav>
			          <ul className="nav nav-pills pull-right" style={{marginTop: 15}}>
			            <li><IndexLink to="/" activeStyle={{backgroundColor: '#337AB7', color: 'white', fontWeight: 'bold'}}>Home</IndexLink></li>
			            <li><Link to="/signup" activeStyle={{backgroundColor: '#337AB7', color: 'white', fontWeight: 'bold'}}>Sign Up</Link></li>
			            <li><Link to="/signin" activeStyle={{backgroundColor: '#337AB7', color: 'white', fontWeight: 'bold'}}>Sign In</Link></li>
			            <li><Link to="/logout" activeStyle={{backgroundColor: '#337AB7', color: 'white', fontWeight: 'bold'}}>Logout</Link></li>
			          </ul>
			        </nav>
	      		</div>

			</div>		
		);
	}
}