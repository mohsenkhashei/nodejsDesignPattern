class LoggerAdapter {

    constructor(fname) {
        super(fname)
    }

    info(txt) {
        this.writeLog("INFO", txt)
    }

    error(txt) {
        this.writeLog("ERROR", txt)
    }
}