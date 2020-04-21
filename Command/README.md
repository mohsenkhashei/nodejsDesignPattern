# Command Design Pattern
>allows you to encapsulate complex behavior inside a single module (or class mind you) which can be used by an outsider with a very simple API.
>The main benefit of this pattern is that by having the business logic split into individual command classes, all with the same API, you can do things like adding new ones or modifying existing code with minimum effect to the rest of your project.


## Example
the ability to create different commands which have a very basic run method, which is where you would put the complex business logic. 
Notice how I used inheritance to try and force the implementation of some of the methods required.

## Best Practices
- Taking care of the actions associated with a menu bar

- Receiving commands from a client application, such as would be the case for a game, where the client application keeps sending command messages to the back-end server for it to process, run them and return the results

- A chat server that receives events from different clients and needs to process them individually

## See This For Better Understanding:
![Command](./Command.png)