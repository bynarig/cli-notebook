import {checkPassword, searchUser} from "./files.service.js";
import prompts from "prompts";
import {setInCache, usernameNpasswordDeleter} from "./cache.service.js";


export function logIn() {

    (async () => {
        const userNameChecker = await prompts({
            type: 'text',
            name: 'login',
            message: 'What is your User Name?',
            validate: value => searchUser(value) ? `Nightclub is 18+ only` : true
        });
        await (async () => {
            const userPasswordChecker = await prompts({
                type: 'text',
                name: 'password',
                message: 'What is your Password?',
                validate: value => checkPassword(userNameChecker.login.toLowerCase(), value) && value.length >= 4 ? `Password < than 4 or no user found (you can create it by typing: CREATE_USER=${value})` : true,
            });
                console.log("LOGGED")
                setInCache(userNameChecker.login.toLowerCase(), userPasswordChecker.password) // caching all
        })();
    })();
}

export function logOut(){
    usernameNpasswordDeleter()
}