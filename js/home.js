import { auth, db } from "../js/firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
// import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

onAuthStateChanged(auth, (user) => {
    if (user) {
       //chamar a função deslogar ao clicar
       const email = document.querySelector("#email")
       email.textContent = user.email
    } else {
        window.location.href = "../index.html";
    }
});


//Função deslogar 
function deslogar() {
    signOut(auth).then(() => {
        window.location.href = "../index.html";
    }).catch((error) => {
        alert("Erro ao deslogar: " + error.message);
    });
}
