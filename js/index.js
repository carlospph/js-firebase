import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from "./firebase.js";

const btnLogin = document.getElementById("btnLogin");

function acessarHome() {
    const inputLogin = document.getElementById("login").value;
    const inputSenha = document.getElementById("senha").value;

    if (inputLogin === "" || inputSenha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // AQUI ESTAVA O ERRO: Você capturou 'inputLogin' e 'inputSenha', 
    // mas tentou passar 'inputEmail' e 'inputPassword' para a função.
    signInWithEmailAndPassword(auth, inputLogin, inputSenha)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Sucesso! Usuário logado:", user.email);
            // Agora você pode redirecionar:
            window.location.href = "html/home.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            console.error("Erro no login:", errorCode);
            
            // Dica: Mensagem amigável para o usuário
            if (errorCode === "auth/invalid-credential") {
                alert("E-mail ou senha incorretos.");
            } else {
                alert("Erro ao tentar entrar. Tente novamente.");
            }
        });
} // Fechamento correto da função acessarHome

btnLogin.addEventListener("click", acessarHome);