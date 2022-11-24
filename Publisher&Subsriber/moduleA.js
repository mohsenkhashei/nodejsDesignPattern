import { publish } from './pubsub.js';

const publishEvent = () => {
	const data = {
		msg: 'TOP SECRET DATA',
	};

	publish('anEvent', data);
};

export default publishEvent;
