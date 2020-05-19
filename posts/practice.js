class Page {
	constructor(text) {
		this.text = text;
	}

	print() {
		console.log(this.text);
	}
}


class Notebook {
	constructor() {
		this.pages = [];
	}

	addPage(text) {
		var page = new Page(text);
		this.pages.push(page);
	}

	print() {
		for (let page of this.pages) {
			page.print();
		}
	}
}

var mathNotes = new Notebook();
mathNotes.addPage("Arithmetic: + - * / ...");
mathNotes.addPage("Trigonometry: sin cos tan ...");

mathNotes.print();


class Publication {
	constructor(title, author, pubDate) {
		this.title = title;
		this.author = author;
		this.pubDate = pubDate;
	}

	print() {
		console.log(`
			Title: ${ this.title }
			By: ${ this.author }
			${ this.pubDate }
		`);
	}
}

// a class which is exposing its private data
// elonMusk.items is accessible in JavaScript 
class TrashCan {
	constructor() {
		this.items = [];
	}

	throwAway(item) {
		this.items = [...this.items, item];

	}

	clean() {
		this.items = [];
	}

	isEmpty() {
		return this.items.length === 0;
	}
}


// var elonMusk = new TrashCan();

// Privacy in JavaScript

// const TrashCan = () => {
// 	let items = [];

// 	const throwAway = item => {
// 		items = [...items, item];
// 	r}

// 	const clean = () => {
// 		items = [];
// 	}

// 	const isEmpty = () => {
// 		return items.length === 0;
// 	}

// 	return {
// 		throwAway,
// 		clean,
// 		isEmpty,
// 	}

// }


var elonTrashCan = new TrashCan();

// elonTrashCan.throwAway('paper ball');

// elonTrashCan.throwAway('empty Starbucks cup of coffee');
// elonTrashCan.throwAway('empty package of Cookies');

// elonTrashCan.clean();

elonTrashCan.items = ['SpaceX secret project'];

console.log(elonTrashCan.isEmpty());

// a function will store a piece of code under the name "doSomething" and does the task defined inside the curly braces.

function doSomething() {
	console.log("hello it is");
}

let myText = 'I am a string';
let newString = myText.replace('string', 'sausage');
console.log(newString);