import { auth } from './firebase.js';
// 1. Mudamos a função importada para signIn...
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const btnLogin = document.getElementById("btnLogin");
function acessarHome() {
    const inputLogin = document.getElementById("login").value;
    const inputSenha = document.getElementById("senha").value;

    if (inputLogin === "" || inputSenha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    signInWithEmailAndPassword(auth, inputLogin, inputSenha)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Login realizado com sucesso!");
            window.location.href = "html/home.html";
        })
        .catch((error) => {
            console.error("Erro no Firebase:", error.code);

            if (error.code === "auth/invalid-credential") {
                alert("E-mail ou senha incorretos.");
            } else if (error.code === "auth/user-not-found") {
                alert("Usuário não encontrado.");
            } else {
                alert("Erro ao tentar entrar: " + error.message);
            }
        });
}

btnLogin.addEventListener("click", acessarHome);