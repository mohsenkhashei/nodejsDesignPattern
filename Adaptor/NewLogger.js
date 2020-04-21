class NewLogger { 

    constructor(fname) {
        this.file_name = fname
    }

    writeLog(level, text) {
        fs.appendFile(this.file_name, `[${level}] ${text}`, err => {
            if(err) console.error(err)
        })
    }
}