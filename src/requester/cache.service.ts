//@ts-ignore
import editJsonFile from "edit-json-file";
let file = editJsonFile(`${process.cwd()}/cache.json`);



export function usernameNpasswordDeleter(){
    file.set("name", "USERISLOGGEDOUT")
    file.set("password", "USERISLOGGEDOUT")
    console.log()
    file.save()
}

export function ISloggedIn(){
    return file.get("name") != "USERISLOGGEDOUT" &&
        file.get("password") != "USERISLOGGEDOUT";
}