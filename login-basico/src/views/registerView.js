export function renderRegisterForm() {
    return `
    <form id="registerForm">
        
        <label>Username:</label>
        <input type="text" id="username" name="username" required></input>
        <label>Password:</label>
        <input type="password" id="password" name="password" required></input>
        <button type="submit">Registrarse</button>
    </form>
    <p id="message"></p>
    <a href="#" id="navigateToLogin">Inicia sesión</a>
    `;
}

export function initRegisterLogic(){
    const form = document.getElementById("registerForm");
    const msg = document.getElementById("message");
    const toLogin = document.getElementById("navigateToLogin");

    form.addEventListener("submit", async function(e){
        e.preventDefault();
        const user = document.getElementById("username").value;
        const pass = document.getElementById("password").value;

        const users = JSON.parse(localStorage.getItem("users")) || [];

        if(users.some(u => u.username === user)){
            msg.innerText = "Ya existe ese usuario";
            msg.style.color = "red";
            return;
        }

        const hashed = await hash(pass);
        users.push({username: user, password: hashed});
        localStorage.setItem("users", JSON.stringify(users));

        msg.innerText = "Se ha registrado";
        msg.style.color = "green";
    });

    toLogin.addEventListener("click", function(e){
        e.preventDefault();
        window.dispatchEvent(new CustomEvent("navigate", {detail:"login"}));
    });
}

async function hash(text){
    const data = new TextEncoder().encode(text);
    const hash = await crypto.subtle.digest("SHA-256", data);
    const hex = Array.from(new Uint8Array(hash)).map(b=>b.toString(16).padStart(2,"0")).join("");
    return hex;
}