import chalk from 'chalk';

class Text {
	constructor(txt) {
		this.string = txt;
	}
	toString() {
		return this.string;
	}
}

function bold(text) {
	let oldToString = text.toString;

	text.toString = function () {
		return chalk.bold(oldToString.apply(text));
	};
	return text;
}

function underlined(text) {
	let oldToString = text.toString;

	text.toString = function () {
		return chalk.underline(oldToString.apply(text));
	};
	return text;
}

function color(text, color) {
	let oldToString = text.toString;

	text.toString = function () {
		if (typeof chalk[color] == 'function') {
			return chalk[color](oldToString.apply(text));
		}
	};
	return text;
}

console.log(bold(color(new Text('This is Red and bold'), 'red')).toString());
console.log(color(new Text('This is blue'), 'blue').toString());
console.log(
	underlined(
		bold(color(new Text('This is blue, underlined and bold'), 'blue'))
	).toString()
);
