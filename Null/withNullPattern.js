class Person {
    constructor(id,name) {
      this.id = id
      this.name = name;
    }
  }
  // Null person wrapper
  class NullPerson {
    constructor() {
      this.id = null
      this.name = 'Guest';
    }
  }
  const persons = [
    new Person(1, "John Doe"),
    new Person(2, "John Papa")
  ]
  function findPerson(id) {
    const person = persons.find(person =&gt; person.id === id)
    if (person)
      return person
    else
      return new NullPerson()
  }
  let personOne = findPerson(1)
  console.log("Welcome, " + personOne.name)
  let personTwo = findPerson(99)
  console.log("Welcome, " + personTwo.name)