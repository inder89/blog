---

title: "You Don't Know JS!"
author: 'Inder'

---

Variables is just giving a useful name to a piece of memory. It's good to think of variables as wires pointing going from your code to a universe of JavaScript values  
### Functions

A function is generally a named section of code that can be "called" by name, and the code inside it will run each time.

```
function greetStudent(student) {
	console.log(
		`Hello, ${student.name} !`	
	);
}

function timeRemaining(timeElapsed, endTime) {
	return endTime - timeElapsed;
}

var left = timeRemaining(42,240);

left;

```

Learning programming is like building blocks. To build a tall tower, you start first by putting block on top of block on top of block. Some essential programming building blocks: 

- You need *operators* to perform actions on values.
- You need values and *types* to perform different kinds of actions like math on *numbers* or output with *strings*.
- You need *variables* to store data (aka state) during your program's execution.
- You need *loops* to repeat tasks until a condition stops being true.
- You need *functions* to organize your code into logical and reusable chunks. 

## 