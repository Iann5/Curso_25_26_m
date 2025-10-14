export function renderLoginForm(){
    return `
    <form id="loginForm">
        
        <label>Username:</label>
        <input type="text" id="username" name="username" required>
        <label>Password:</label>
        <input type="password" id="password" name="password" required>
        <button type="submit">Iniciar sesión</button>
    </form>
    <p id="message"></p>
    <a href="#" id="navigateToRegister">Registrarse</a>
    `;
}

export function initLoginLogic(){
    const form = document.getElementById("loginForm");
    const msg = document.getElementById("message");
    const toRegister = document.getElementById("navigateToRegister");

    form.addEventListener("submit", async function(e){
        e.preventDefault();
        const user = document.getElementById("username").value;
        const pass = document.getElementById("password").value;

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const found = users.find(u => u.username === user);

        if(!found){
            msg.innerText = "Este usuario no existe";
            msg.style.color = "red";
            return;
        }

        const hashed = await hash(pass);
        if(hashed === found.password){
            msg.innerText = "Inicio de sesión correcto";
            msg.style.color = "green";
        } else {
            msg.innerText = "Contraseña incorrecta";
            msg.style.color = "red";
        }
    });

    toRegister.addEventListener("click", function(e){
        e.preventDefault();
        window.dispatchEvent(new CustomEvent("navigate", {detail:"register"}));
    });
}

async function hash(text){
    const data = new TextEncoder().encode(text);
    const hash = await crypto.subtle.digest("SHA-256", data);
    const hex = Array.from(new Uint8Array(hash)).map(b=>b.toString(16).padStart(2,"0")).join("");
    return hex;
}