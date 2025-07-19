/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/
1.
Explicit
let num = 3;
console.log(typeof str);
(This is an explicit type conversion where the number is 
being converted to a String.)

Implicit
console.log("5"-2);
(This is an implicit type conversion because the code is using
  subtraction to convert a string to number.)

2.
Explicit

let num = 0;
console.log(Boolean(num));
let text = "This is valid";
console.log(Boolean(text));
(This is an explicit type conversion where a number is 
  being converted into a Boolean.)

Implicit
if("This is valid"){
   console.log("This is truthy");
}

if (null){
  console.log("This is falsy.");
}
(This is an example of an Implicit type conversion demonstating
  a truthy and falsey outcome.)



3.
 
Explicit

let str = "25";
let totalAge = Number(str);
console.log(totalAge);
(This is an explict type conversion where a string is 
being converted into a number.)

Implicit

let age= 25;

console.log('You are ${age} years old.');

This is an example of an Implicit conversion demonstrating
turning non-string values to strings. 