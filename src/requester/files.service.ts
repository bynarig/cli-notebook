

import editJsonFile from "edit-json-file";
let file = editJsonFile(`${process.cwd()}/database.json`);


export function searchUser(userName: string){
    // if (userName.slice(1, 12) != "CREATE_USER="){}
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

export  function isNoteExist(noteName:string, path: string){
    if (file.get(`${path}.${noteName}`) != undefined){
        return true
    } else {
        return false
    }
}

export function saveNote(path:string, noteName: string, noteContent: string){
    file.set(`${path}.${noteName}`, noteContent)
    file.save()
}

export  function isNoteExistReversed(noteName:string, path: string){
    if (file.get(`${path}.${noteName}`) != undefined){
        return false
    } else {
        return true
    }
}

export function deleteNotes(path:string, noteName: string){
    file.unset(`${path}.${noteName}`)
    file.save()
}