class Pizza {
	constructor() {
		this.base_price = 10;
	}
	calculatePrice() {
		return this.base_price;
	}
}

function addTopping(pizza, topping, price) {
	let prevMethod = pizza.calculatePrice;
	pizza.toppings = [...(pizza.toppings || []), topping];
	pizza.calculatePrice = function () {
		return price + prevMethod.apply(pizza);
	};
	return pizza;
}

// usage

let oPizza = new Pizza();

oPizza = addTopping(addTopping(oPizza, 'muzzarella', 10), 'anana', 100);

console.log('Toppings: ', oPizza.toppings.join(', '));
console.log('Total price: ', oPizza.calculatePrice());
