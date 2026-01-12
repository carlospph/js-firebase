import { auth } from "./firebase.js";
import { confirmPasswordReset } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// 1. Captura o oobCode que o Firebase colocou na URL
const urlParams = new URLSearchParams(window.location.search);
const oobCode = urlParams.get('oobCode');

const btnSalvar = document.getElementById('btnSalvarSenha');

btnSalvar.addEventListener('click', async () => {
    const novaSenha = document.getElementById('inputNovaSenha').value;
    const confirmaSenha = document.getElementById('inputConfirmaSenha').value;

    if (novaSenha !== confirmaSenha) {
        alert("As senhas não coincidem!");
        return;
    }

    if (novaSenha.length < 6) {
        alert("A senha deve ter no mínimo 6 caracteres.");
        return;
    }

    try {
        // 2. Envia para o Firebase
        await confirmPasswordReset(auth, oobCode, novaSenha);
        alert("Senha alterada com sucesso! Você será redirecionado para o login.");
        window.location.href = "../index.html";
    } catch (error) {
        console.error("Erro ao resetar:", error.code);
        alert("Este link expirou ou já foi utilizado. Peça um novo link.");
    }
});