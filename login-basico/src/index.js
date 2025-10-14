// IMPORTACIONES

import { initialApp } from "./app.js";
import bcrypt from "bcryptjs";

initialApp();

// hash las password
//const salt = bcrypt.genSaltSync(10);
//const hash = bcrypt.hashSync("invitado1", salt);
//console.log(hash);