class IceCream { 
    constructor(flavor) {
        this.flavor = flavor
    }

    describe() {
        console.log("Normal ice cream,", this.flavor, " flavored")
    }
}

function decorateWith(object, decoration) {
    object.decoration = decoration
    let oldDescr = object.describe //saving the reference to the method so we can use it later
    object.describe = function() {
        oldDescr.apply(object)
        console.log("With extra", this.decoration)
    }
    return object
}

// usage

let oIce = new IceCream("vanilla") //A normal vanilla flavored ice cream...
oIce.describe() 

let vanillaWithNuts = decorateWith(oIce, "nuts") //... and now we add some nuts on top of it
vanillaWithNuts.describe()