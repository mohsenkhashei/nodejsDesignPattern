export default class DefaultLoginStrategy {
	login(username, password) {
		return Promise.resolve({
			strategy: 'default',
			success: false,
			username: username,
		});
	}

	useStrategy() {
		return true;
	}
}
