
// import { auth } from "./firebase";

// const btnLogin = document.getElementById("btnLogin");
// function acessarHome() {
//     const inputLogin = document.getElementById("login").value;
//     const inputSenha = document.getElementById("senha").value;

//     if (inputLogin === "" || inputSenha === "") {
//         alert("Por favor, preencha todos os campos.");
//         return;
//     }

//     else {

//         const auth = getAuth();
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 // Signed in 
//                 const user = userCredential.user;
//                 // ...
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//             });

//     }
// }

// btnLogin.addEventListener("click", acessarHome);


// Importa a função específica do Firebase via CDN
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Importa o 'auth' que você configurou no outro arquivo
import { auth } from "./firebase.js";

// O SEU CÓDIGO:
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("Sucesso! Usuário logado:", user.email);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Erro no login:", errorCode);
  });