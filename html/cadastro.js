import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { auth, db } from "../js/firebase.js"; // Seu arquivo de config

const btnCadastrar = document.getElementById("btnCadastrar");

async function realizarCadastroCompleto() {
    // Capturando os valores
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const endereco = document.getElementById("endereco").value;
    const nascimento = document.getElementById("nascimento").value;

    // Validação simples
    if (!email || !senha || !nome) {
        alert("E-mail, Senha e Nome são obrigatórios!");
        return;
    }

    try {
        // Passo 1: Criar o login no Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
        const user = userCredential.user;

         await setDoc(doc(db, "usuarios", user.uid), {
            nome: nome,
            email: email,
            telefone: telefone,
            endereco: endereco,
            dataNascimento: nascimento,
            dataCriacao: new Date().toISOString()
        });

        alert("Cadastro realizado com sucesso!");
        window.location.href = "../index.html"; // Redireciona para o login

    } catch (error) {
        console.error("Erro completo:", error);
        
        // Mensagens amigáveis
        if (error.code === 'auth/email-already-in-use') {
            alert("Este e-mail já está cadastrado.");
        } else if (error.code === 'auth/weak-password') {
            alert("A senha é muito fraca (mínimo 6 caracteres).");
        } else {
            alert("Erro ao cadastrar: " + error.message);
        }
    }
}

btnCadastrar.addEventListener("click", realizarCadastroCompleto);