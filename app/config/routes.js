import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import Main from 'Main';

module.exports = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
		</Route>
	</Router>
);
