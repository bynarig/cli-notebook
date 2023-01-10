import {checkArgument} from "./requester/request.service.js";
import dotenv from "dotenv";


dotenv.config();       //dotenv init


console.log("") //skips one line for better readability

function InitCLI(){
    checkArgument(process.argv)
}
InitCLI()