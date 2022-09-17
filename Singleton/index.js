let instance = null;

class Singleton {
	constructor() {
		this.value = Math.random(100);
	}
	printValue() {
		console.log(this.value);
	}
	static getInstance() {
		if (!instance) {
			instance = new Singleton();
		}
		return instance;
	}
}

const obj = Singleton.getInstance();
const obj2 = Singleton.getInstance();

obj.printValue();
obj2.printValue();

console.log('Equals:: ', obj === obj2);

/* outputs:
0.5035326348000628
0.5035326348000628
Equals::  true
*/
