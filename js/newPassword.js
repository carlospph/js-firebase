import { auth } from "../js/firebase.js";
import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
const inputEmail = document.getElementById('inputEmail');
const btnSend = document.getElementById('btnSend');

btnSend.addEventListener('click', () => {
    const email = inputEmail.value;

    if (email.trim() === "") {
        alert("Por favor, insira um email válido.");
    }
    else {

        auth.languageCode = 'pt-BR';

        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("E-mail de recuperação enviado! Verifique sua caixa de entrada.");
                inputEmail.value = "";
            })
            .catch((error) => {
                console.error("Erro:", error.code);
                alert("Erro ao enviar e-mail: " + error.message);
            });
    }
})
