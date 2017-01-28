import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import Main from 'Main';
import SupplyForm from 'SupplyForm';
import Welcome from 'Welcome';

module.exports = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="supplyform" component={SupplyForm} />
			<IndexRoute component={Welcome} />
		</Route>
	</Router>
);
