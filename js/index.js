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


    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });


}

btnLogin.addEventListener("click", acessarHome);