# Singleton Design Pattern
>singleton pattern, allows you to instantiate an object once, and then use that one every time you need it, instead of creating a new one without having to keep track of a reference to it, either globally or just passing it as a dependency everywhere.

## More Info
it might be a good idea to keep that connection alive and accessible throughout your code.<br>
A lot of people new to Node.js get confused about how to implement the Singleton pattern correctly, most of the time with the simple intent of sharing an instance across the various modules of an application. However, the answer in Node.js is easier than what we might think; simply exporting an instance using module.exports is already enough to obtain something very similar to the Singleton pattern

## See This For Better Understanding:
![Singleton](./Singleton.png)