import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import LoginSignIn from 'LoginSignIn';
import LoginSignOut from 'LoginSignOut';
import LoginSignUp from 'LoginSignUp';
import LoginSignUpSuccessful from 'LoginSignUpSuccessful';
import Main from 'Main';
import PurchaseRequisition from 'PurchaseRequisition';
import SupplyForm from 'SupplyForm';
import Welcome from 'Welcome';

module.exports = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="supplyform" component={SupplyForm} />
			<Route path="signup" component={LoginSignUp} />
			<Route path="signupsuccessful" component={LoginSignUpSuccessful} />
			<Route path="signin" component={LoginSignIn} />
			<Route path="logout" component={LoginSignOut} />
			<Route path="purchaserequisition" component={PurchaseRequisition} />
			<IndexRoute component={Welcome} />
		</Route>
	</Router>
);