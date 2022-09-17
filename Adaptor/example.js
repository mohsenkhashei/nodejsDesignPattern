const fs = require('fs');

class OldLogger {
	constructor(fname) {
		this.file_name = fname;
	}
	info(text) {
		fs.appendFile(this.file_name, `[INFO] ${text}`, (err) => {
			if (err) console.error(err);
		});
	}
	error(text) {
		fs.appendFile(this.file_name, `[ERROR] ${text}`, (err) => {
			if (err) console.error(err);
		});
	}
}
class NewLogger {
	constructor(fname) {
		this.file_name = fname;
	}

	writeLog(level, text) {
		fs.appendFile(this.file_name, `[${level}] ${text}`, (err) => {
			if (err) console.error(err);
		});
	}
}
class LoggerAdapter extends NewLogger {
	constructor(fname) {
		super(fname);
	}
	info(txt) {
		this.writeLog('INFO', txt);
	}
	error(txt) {
		this.writeLog('ERROR', txt);
	}
}
// example of usage of newLogger
let myLogger = new LoggerAdapter('./file.log');
myLogger.info('Log message!');
