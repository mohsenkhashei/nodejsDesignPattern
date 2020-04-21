# Adaptor Design Pattern
>it helps you adapt one API into another.
>the adapter is basically a wrapper around a particular class or object, which provides a different API and utilizes the object’s original one in the background.


## Use Case
OldLogger class works but the logger API changed suddenly to NewLogger class 
but with LoggerAdaptor we don't have problem to work with new NewLogger API.

## Best Practices
you can also use the adapter pattern to wrap a component you already know might change its API in the future and write code that works with your adapter’s API. This will help you avoid future problems if your component either changes APIs or has to be replaced altogether.

One example of this would be a storage component, you can write one that wraps around your MySQL driver, and provides generic storage methods. If in the future, you need to change your MySQL database for an AWS RDS, you can simply re-write the adapter, use that module instead of the old driver, and the rest of your code can remain unaffected.