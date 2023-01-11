

import editJsonFile from "edit-json-file";
let file = editJsonFile(`${process.cwd()}/example.json`);


export function searchUser(userName: string){ //checking does user exists
    // if (userName.slice(1, 12) != "CREATE_USER="){
    //     //creating user here
    // }
    if (file.get(`${userName}`) == undefined){ // returns false if user have been found
        return true
    } else {
        return false
    }

}

export function checkPassword(userName: string, ISpassword: string){
    if (file.get(`${userName}.password`) != ISpassword){ //returns true if password incorrect
        return true
    } else {
        return false
    }
}