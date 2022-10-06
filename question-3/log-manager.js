/*  Omar Nabi
    101339235
    COMP3123
    Test #1
    Question #3*/

const fs = require("fs")

createLogs = () => {
    const logDirectory = "./logs"
    fs.existsSync(logDirectory) ? console.log(`${logDirectory} already exists!`)
    : fs.mkdirSync(logDirectory)
    process.chdir(logDirectory)
    for (let index = 0; index < 10; index++) {
        fs.appendFileSync(`log${index}.txt`, `Log File #${index}`, error => { if (error) throw error })
    }
}

removeLogs = () => {
    const logDirectory = "./logs"
    fs.existsSync(logDirectory) ? process.chdir(logDirectory)
    : console.log(`${logDirectory} does not exist!`)
    fs.readdirSync(logDirectory,  (error) => {if (error) throw error })
}

createLogs()