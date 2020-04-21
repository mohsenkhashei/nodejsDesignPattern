const fs = require("fs")

class OldLogger { 

    constructor(fname) {
        this.file_name = fname
    }

    info(text) {
        fs.appendFile(this.file_name, `[INFO] ${text}`, err => {
            if(err) console.error(err)
        })
    }

    error(text) {
        fs.appendFile(this.file_name, `[ERROR] ${text}`, err => {
            if(err) console.error(err)
        })
    }
}