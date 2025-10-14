import { getUsers, setUsers } from "../helpers/storage.js";
import bcrypt from "bcryptjs";

export default function registerService(username, password) {
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername || !trimmedPassword) {
        return { ok: false, message: "Usuario y contraseña no pueden estar vacíos." };
    }

    if (trimmedPassword.length <= 8) {
        return { ok: false, message: "La contraseña debe tener más de 8 caracteres." };
    }

    const users = getUsers();
    const userExists = users.some(user => user.username === trimmedUsername);

    if (userExists) {
        return { ok: false, message: "El nombre de usuario ya existe." };
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(trimmedPassword, salt);

    setUsers({ id: Date.now(), username: trimmedUsername, password: hashedPassword, rol: "invitado" });

    return { ok: true, message: "Usuario registrado correctamente. Por favor, inicia sesión." };
}