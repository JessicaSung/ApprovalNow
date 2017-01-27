import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import Main from 'Main';
import Welcome from 'Welcome';

module.exports = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Welcome} />
		</Route>
	</Router>
);
