import { subscribe } from './pubsub.js';
let subscription;

subscription = subscribe('anEvent', (data) => {
	console.log(`"anEvent", was published with this data: "${data.msg}"`);
	subscription.unsubscribe();
});
