# Strategy Design Pattern
>The strategy pattern is a very useful way to have multiple concurrent solutions to a problem.
>We may have different strategies required for development, automated testing, and production environments. This is where the strategy pattern becomes so effective.

## Use Cases
In our application, we have different login policies.

- When running on localhost, passwords will be stored in the database.
- When running under an automated test, the password is always “test”.
- When running in production, use active directory validate users.
