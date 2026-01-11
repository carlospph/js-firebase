import { auth } from './firebase.js'; // Conexao do firebase
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const btnLogin = document.getElementById("btnLogin");
function acessarHome() {
    const inputLogin = document.getElementById("login").value;
    const inputSenha = document.getElementById("senha").value;

    if (inputLogin === "" || inputSenha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // signInWithEmailAndPassword(auth, inputLogin, inputSenha)
    //     .then((userCredential) => {
    //         const user = userCredential.user;
    //         window.location.href = "html/home.html";
    //     })
    //     .catch((error) => {
    //         if (error.code === "auth/invalid-credential") {
    //             alert("E-mail ou senha incorretos.");
    //         } else if (error.code === "auth/user-not-found") {
    //             alert("Usuário não encontrado.");
    //         } else {
    //             alert("Erro ao tentar entrar: " + error.message);
    //         }
    //     });


    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            var email = user.email;
        } else {
            console.log("Algo errado...")
        }
    });
    firebase.auth().signInWithEmailAndPassword(email, password);


}

btnLogin.addEventListener("click", acessarHome);