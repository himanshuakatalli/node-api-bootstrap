"use strict";

const routeConfigurator = require('./routeConfigurator');

const BASE_ROUTER_CONFIG = { version: '', mountPoint: '', router: routeConfigurator.getRouter() };

module.exports = {
	getConfiguredRoutersFor (ACTIVE_APIS) {
		let API_ROUTERS = ACTIVE_APIS.map(version => Object.assign({}, {
			version,
			'mountPoint': '/api/' + version,
			'router': routeConfigurator.getRouter(version),
		}));
		API_ROUTERS.push(BASE_ROUTER_CONFIG);
		return API_ROUTERS;
	}
}



