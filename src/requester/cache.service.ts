//@ts-ignore
import editJsonFile from "edit-json-file";
let file = editJsonFile(`${process.cwd()}/cache.json`);



export function usernameNpasswordDeleter(){ //logOUT for user P.S. changing name && password to undefined names
    file.set("name", undefined)
    file.set("password", undefined)
    console.log("Successfully loggedOUT")
    file.save()
}

export function ISloggedIn(){
    return file.get("name") != undefined &&
        file.get("password") != undefined;
}

export function setInCache(login: string, password: string){ //caching login and password in cache to skip login in next time
    file.set("name", login)
    file.set("password", password)
    file.save()
}