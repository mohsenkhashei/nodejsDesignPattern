const myLogger = ( _ => {
    const FILE_PATH = "./testLog.log"
    const fs = require("fs")
    const os = require("os")

    function writeLog(txt) {
        fs.appendFile(FILE_PATH, txt + os.EOL, err => {
            if(err) console.error(err)
        })
    }

    function info(txt) {
        writeLog("[INFO]: " + txt)
    }

    function error(txt) {
        writeLog("[ERROR]: " + txt)
    }
    return {
        info, 
        error
    }
})()


myLogger.info("Hey there! This is an info message!")
myLogger.error("Damn, something happened!")