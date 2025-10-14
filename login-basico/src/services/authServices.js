import { getUsers } from "../helpers/storage.js";
import bcrypt from "bcryptjs";

export default function authServices(username,passsword){
    // existe username y password
    // password longitud > 8
    // existe user y password en localStorage
    // nota: siempre, siempre, siempre trimear la dara de loss formularios
    
    if(!username.trim() || !passsword.trim() || !passsword.length > 8){
        return false;
    }
    
    const users = getUsers();
    const user = users.find((user) => user.username === username)
    
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(passsword, salt);
    const ok = bcrypt.compareSync(user.passsword,hash);
    
    return ok;
}