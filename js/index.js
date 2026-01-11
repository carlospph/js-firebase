import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const btnLogin = document.getElementById("btnLogin");
function acessarHome() {
    const inputLogin = document.getElementById("login").value;
    const inputSenha = document.getElementById("senha").value;

    if (inputLogin === "" || inputSenha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    else {

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
}

btnLogin.addEventListener("click", acessarHome);