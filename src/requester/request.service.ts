import {isNumberObject} from "util/types";

export function checkArgument(data: string[]) {

    let argument = data.slice(2) // only arguments in this array
    let response = ''       // response text

    if (argument[0].charAt(0) == "-") {
        for (let i = 0; i < argument.length; i++) {      //func for counting args
            if (argument[i].charAt(0) == "-") {
                if (argument.length > i + 2 && argument[i + 1].charAt(0) != "-" && argument[i + 2].charAt(0) != "-") { //validation of args
                    return "invalid arguments written"
                }
                switch (argument[i]) {
                    case "-help":
                        return getHelp();
                    case "-login":
                        return logIn(argument[i + 1]) // gets next argument to log in
                    default:
                        return `Argument with id:${i} is invalid, check your argument one more time` //searching argument in commands
                }
            }
        }
    } else {
        return "No arguments founded"
    }

    return response
}

function getHelp() {
    return "Here is your help"
}


function logIn(name: string) {
    if (name.charAt(0) != "-" && isNumberObject(name.charAt(0)) == false && name.charAt(0) != "_" && name.charAt(0) != "=") {
        // NEED TO WRITE LOGIN LOGIC HERE
        return "login completed"
    }
    return "invalid data for logging"
}

