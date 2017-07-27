"use strict";

const _err = require('../../app/helpers/v1/error');

const commonSeeders = [
	'role', 'user', 'oauth-client'
];

const seeders = {
	'role': require('./role'),
	'user': require('./user'),
	'oauth-client': require('./oauth-client')
};

const seederNotExists = (seederName) => !seeders[seederName];

module.exports = {

	async run (common, extras) {
		for (let key in commonSeeders){
			if (seederNotExists(commonSeeders[key]))
				throw _err.createError( _err.getError('SEEDER_NOT_DEFINED') ,`${seederName} seeder not defined`);
			await seeders[commonSeeders[key]].run();
		}

		if (extras) {
			extras.forEach(seederName => {
				if (seederNotExists(seederName))
					throw _err.createError( _err.getError('SEEDER_NOT_DEFINED'), `${seederName} seeder not defined`);
				seeders[seederName].run()
			})
		}
	}
};