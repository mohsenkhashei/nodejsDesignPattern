import loginStrategies  from './loginStrategies.js';

function selectLoginStrategy() {
	let strategies = Object.keys(loginStrategies);
	for (let i = 0; i < strategies.length; i++) {
		let strategy = loginStrategies[strategies[i]];
		if (strategy.useStrategy()) {
			return strategy.login;
		}
	}
}

// usage
function login(username, clearPassword) {
	let loginStrategy = selectLoginStrategy();
	return loginStrategy(username, clearPassword);
}
