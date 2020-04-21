# Chain Of Responsiblity Design Pattern
>It consists of structuring your code in a way that allows you to decouple the sender of a request with the object that can fulfill it.
>the adapter is basically a wrapper around a particular class or object, which provides a different API and utilizes the object’s original one in the background.


## Use Case
The most obvious case of this pattern in our ecosystem is the middlewares for ExpressJS. With that pattern, you’re essentially setting up a chain of functions (middlewares) that evaluate the request object and decide to act on it or ignore it.

## More Info
In other words, having object A sending request R, you might have three different receiving objects R1, R2, and R3, how can A know which one it should send R to? Should A care about that?

The answer to the last question is: no, it shouldn’t. So instead, if A shouldn’t care about who’s going to take care of the request, why don’t we let R1, R2 and R3 decide by themselves?

Here is where the chain of responsibility comes into play, we’re creating a chain of receiving objects, which will try to fulfill the request and if they can’t, they’ll just pass it along. Does it sound familiar yet?