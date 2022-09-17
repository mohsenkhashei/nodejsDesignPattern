class Director {
	constructor(fname, lname) {
		this.firstName = fname;
		this.lastName = lname;
	}
	getName() {
		return 'Director ' + this.firstName + ' ' + this.lastName;
	}
}
class Manager {
	constructor(fname, lname) {
		this.firstName = fname;
		this.lastName = lname;
	}
	getName() {
		return 'Manager ' + this.firstName + ' ' + this.lastName;
	}
}
class Engineer {
	constructor(fName, lName) {
		this.firstName = fName;
		this.lastName = lName;
	}
	getName() {
		return ' Engineer ' + this.firstName + ' ' + this.lastName;
	}
}
/*  
    factory usage
*/
const Factory = (fname, lname, type) => {
	if (type === 'engineer') {
		return new Engineer(fname, lname);
	} else if (type === 'manager') {
		return new Manager(fname, lname);
	} else if (type === 'director') {
		return new Director(fname, lname);
	}
};

const newFactory = Factory('Mohsen', 'Khashei', 'engineer');
console.log(newFactory.getName());
