---

title: 'JavaScript'
author: 'Inder'

---

JS is an implementation of ECMAScript standard. It runs in the browser and other JS environments such as Node.js

JS is a compiled langauge, the tools process and verify a program before it executes
Each seperate JS file is its own program so that means there needs to be an entry point for the application.
Values are data, they are how the program maintains state. Values comes in two forms in JS: primitive and object
greeting("My name is Inder."); There is a primitive string literal 
const cannot be re-assigned a different value later. 

So what's the difference between reassigned and unchangeable?
if we use const in objects then the variable will remain the same but the object contents might be different later 

In JS function could mean a "procedure", a collection of statements that can be invoked one or more times, may be provided some inputs, and may give back one or more outputs.

function awesomeFunction(coolThings) {
	//..
	return amazingStuff;
}

the name of the function and the value it represents is associated in the compilation phase of the code

To return multiple values from a function we can wrap them into a single object/array

"===" disallows any type coercion 
Special cases of === : NaN === NaN; // false , May be use Number.isNaN(..)
0 === -0; // true  use Object.is(..) , Does it deep checking, quadruple-equals instead of triple-equals
Strings are immutable because they are primitive values

Well in this case we are reassigning pet to a totally new block of information which happens to be a string of characters.


Different JavaScript nouns and verbs:

variables

