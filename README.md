# TypeScript: Array passed to function expecting string

This example demonstrates a common TypeScript error that occurs when an array is passed to a function expecting a string argument.  The code attempts to use an array of strings in a function designed for a single string.  The solution shows how to modify the function to handle arrays or use array elements correctly.

## Bug
The `greeter` function is defined to accept a single string argument. However, the code attempts to pass an array of strings. TypeScript will throw an error because of this type mismatch.