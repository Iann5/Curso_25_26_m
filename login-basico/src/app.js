import { DB } from "./db/db.js";
import { initialStorage } from "./helpers/storage.js";
import { renderLoginForm } from "./views/loginView.js";
import { initLoginLogic } from "./views/loginView.js";
import { renderRegisterForm, initRegisterLogic } from "./views/registerView.js";

export function initialApp(){
    // iniciamos guardando los usuarios en localStorage
    initialStorage(DB);

    // Pintamos/renderizamos mi formulario en app
    const app = document.getElementById("app");
    app.innerHTML= renderLoginForm();
    const form = document.querySelector("#loginForm");
    const message = document.querySelector("#message");

    // pongo un escuchador de eventos al formulario
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        // Comprobar si username y passsword son correctas.
        const { username,password } = Object.entries(new FormData(form));
        // crear función que valide que usuarios y password
        // son correctas usando las siguientes restricciones
        // -no vacias
        // -password > 8 caracteres
        // username y password están en localStorage
        const ok = validarCredenciales(username, password);
    
        message.innerHTML=ok 
        ? `<span style="green">Bienvenido ${username}</span>`
        : `<span style="red">Credenciales Erroneas</span>` ;
        form.reset();
    })
}

function mostrarVista(vista){
    let app = document.getElementById("app");
    if(!app) return;

    if(vista === "register"){
        app.innerHTML = renderRegisterForm();
        initRegisterLogic();
    } else {
        app.innerHTML = renderLoginForm();
        initLoginLogic();
    }
}

// carga la vista por defecto (login)
window.addEventListener("DOMContentLoaded", function(){
    mostrarVista("login");
});

// escucha los eventos para cambiar entre vistas
window.addEventListener("navigate", function(e){
    mostrarVista(e.detail);
});