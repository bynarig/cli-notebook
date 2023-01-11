import {logIn, logOut} from "./loginout.service.js"

export function checkArgument(data: string[]) {

    let argument = data[2] // only argument

    if (argument?.charAt(0) == "-") {
        switch (argument) {
            case "-help":
                return getHelp();
            case "-login":
                return logIn()
            case "-logout":
                return logOut()
            default:
                return `Argument \"${argument}\" is invalid, check your argument one more time` //searching argument in commands
        }
    } else {
        console.log("Something went wrong with args")
    }
}

function getHelp() {
    console.log('Here is your help')
}




