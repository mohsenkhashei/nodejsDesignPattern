# Module Design Pattern
>A very common practice in Node.js (and JavaScript in general), is to organize your code into modules (i.e set of functions that are related to each other, so you group them into a single file and export them out). By default, Node’s modules allow you to pick what to share and what to hide, so no problem there.<br />
But if you’re either using plain old JavaScript or maybe have several modules inside the same file, this pattern helps you hide parts while, at the same time, letting you choose what to share.
>is heavily dependent on the IIFE pattern.


## More Info
- Cleaner namespace
This helps you keep things organized, avoid naming conflicts or even user code affecting the behavior of your functions by modifying any possible global variable you might have.<br />
Disclaimer: I do not condone nor am I saying global variables are a good coding standard or something you should even be attempting to do, but considering you’re encapsulating them inside your module’s scope, they’re not global anymore. So make sure you think twice before using this pattern, but also consider the benefits provided by it!
- Avoid import name collision
If you happen to be using several external libraries (especially when you’re working with plain JavaScript for your browser) they might be exporting their code into the same variable (name collision). So if you don’t use the module pattern like I’m going to show you, you might run into some unwanted behavior.

## Use Cases
The module pattern is definitely one of the most common ones because it seems to have been born out of the necessity for control over what to share and what to hide from your modules.
