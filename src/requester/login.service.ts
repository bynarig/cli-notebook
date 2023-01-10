import {checkPassword, searchUser} from "./files.service.js";
import prompts from "prompts";


export function logIn() {

    (async () => {
        const userNameChecker = await prompts({
            type: 'text',
            name: 'login',
            message: 'What is your User Name?',
            validate: value => searchUser(value) && value.length >= 4 ? `Username < than 4 or no user found (you can create it by typing: CREATE_USER=${value})` : true,
        });
        await (async () => {
            const userPasswordChecker = await prompts({
                type: 'text',
                name: 'password',
                message: 'What is your password?',
                validate: value => checkPassword(userNameChecker.login.toLowerCase(), value) && value.length >= 4 ? `Wrong password` : true,
            });
            console.log("LOGGED IN") //need to store log for other sessions
        })();
    })();
}