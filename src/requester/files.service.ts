import json from '../../example.json' assert {type: "json"}
export function searchUser(userName: string){ //checking does user exists
    if (userName.slice(1, 12) != "CREATE_USER="){
        //creating user here
    }
    return !(userName.toLowerCase() in json);
}

export function checkPassword(userName: string, ISpassword: string){

    let jsonPathToPassword = `json.${userName}.password`
    return jsonPathToPassword == ISpassword;

}