import editJsonFile from "edit-json-file";
import {ISloggedIn} from "./cache.service.js";
import prompts from "prompts";
import {deleteNotes, isNoteExist, isNoteExistReversed, saveNote} from "./files.service.js";

let file = editJsonFile(`${process.cwd()}/database.json`);

export function startingNotes(login: string) {
    if (ISloggedIn()) {
        console.log(file.get(`${login}.notes`))
        if (true) {
            (async () => {
                const nameNewNote = await prompts({
                    type: 'text',
                    name: 'noteName',
                    message: 'Name your note',
                    validate: value => isNoteExist(value, `${login}.notes`) ? `Note with this name already exists or you deleted it` : true,
                });
                await (async () => {
                    const createNewNote = await prompts({
                        type: 'text',
                        name: 'noteContent',
                        message: 'Write content to your note',
                        validate: value => value.slice(value.length - 2, value.length) != "-y" ? `Add -y in the end` : true,
                    });
                    saveNote(`${login}.notes`, nameNewNote.noteName, createNewNote.noteContent.slice(0, createNewNote.noteContent.length - 2))
                    console.log(file.get(`${login}.notes`))
                })();
            })();
        }

    } else {
        console.log("User is not logged in(")
    }
}

export function deletingNotes(login: string) {
    if (ISloggedIn()) {
        console.log(file.get(`${login}.notes`))
        if (true) {
            (async () => {
                const deleteNote = await prompts({
                    type: 'text',
                    name: 'noteName',
                    message: 'Choose your note to delete: ',
                    validate: value => isNoteExistReversed(value, `${login}.notes`) ? `There is no note with name like this` : true,
                });
                deleteNotes(`${login}.notes`, deleteNote.noteName)
                console.log("successfully deleted")
            })();
        }

    } else {
        console.log("User is not logged in(")
    }
}