class Person {
   constructor(id,name) {
     this.id = id
     this.name = name;
   }
 }
 const persons = [
   new Person(1, "John Doe"),
   new Person(2, "John Papa")
 ]
 function findPerson(id) {
   return persons.find(person =&gt; person.id === id)
 }
 let personOne = findPerson(1)
 if(personOne != null &amp;&amp; personOne.name != null)
 {
    console.log("Welcome, " + personOne.name)
 }
 else
 {
    console.log("Welcome Guest")
 }
 // Again in some other part of code
 let personOne = findPerson(2)
 if(personOne != null &amp;&amp; personOne.name != null) {
    console.log("Welcome, " + personOne.name)
 } else {
    console.log("Welcome Guest")
 }