# Observer Design Pattern
>it allows you to respond to certain input by being reactive to it, instead of proactively checking if the input is provided. In other words, with this pattern, you can specify what kind of input you’re waiting for and passively wait until that input is provided in order to execute your code.
>If you were to be considering using this pattern in Node.js, please look at the EventEmitter object first, since it’s Node.js’ own implementation of this pattern, and might save you some time.

## Use Cases
 Some examples are the HTTP module, any database driver, and even socket.io, which allows you to set observers on particular events triggered from outside your own code.
