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


``` 
function awesomeFunction(coolThings) {
	//..
	return amazingStuff;
}
```

the name of the function and the value it represents is associated in the compilation phase of the code

To return multiple values from a function we can wrap them into a single object/array

"===" disallows any type coercion 
Special cases of === : NaN === NaN; // false , May be use Number.isNaN(..)
0 === -0; // true  use Object.is(..) , Does it deep checking, quadruple-equals instead of triple-equals
When the types are equal '==' & '===' do the same exact thing so implicit coercion might be easier and preferable

Strings are immutable because they are primitive values

Well in this case we are reassigning pet to a totally new block of information which happens to be a string of characters.


### Variables and Blocks

The primary purpose of variables in JavaScript is managing program state. Its value might change over the course of the program. In other words state is tracking the changes to values as your program runs.

Grouping a series of statements together is called a block.

```
var amount = 99.99;

// a general block
{
	amount = amount * 2;
	console.log( amount );
}

```

A more common type of block is the one attached to an if statement or a loop.

#### If statements

If a value is not a Boolean inside a conditional JS coerces it into a boolean. The values which become false upon coercion are called "falsy" and the rest are "truthy". 

#### Loops

Repeating a set of actions only while the condition still holds is the job of programming loops. Each time the loop block executes, that's called an iteration.

### Three Pillars of JS

* Types / Coercion
* Scopes & Closures
* this & Prototypes
Which values if we try to convert them will become false?
""
0, -0
null
NaN
false
undefined
All others values become a true 

'<' like comparison operators automatically converts the operands into a number if one of them is a number.

#### this & Prototypes

a this-aware function can have a dynamic context depending upon its execution.
Remember it's how a function is called is what matters not how it's defined.

```
var workshop = {
	teacher: "Kyle",
	ask(question) {
		console.log(this.teacher, question);
	},
};

workshop.ask("What is implicit binding?");
// Kyle What is implicit binding?

```
Arrow functions don't get their own 'this' so it's not important not to use them as methods.
The decision to make is whether we know in what way the function will be called. In case of dynamic calling it's better to use an arrow function whereas if need the 'this' value to point to the given object's variable, it's better to use a normal function 

