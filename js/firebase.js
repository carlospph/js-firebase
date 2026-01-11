import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAU2dav003KmQsibZwBIao21R7cRA8nL28",
  authDomain: "js-puro-help.firebaseapp.com",
  projectId: "js-puro-help",
  storageBucket: "js-puro-help.firebasestorage.app",
  messagingSenderId: "961688955606",
  appId: "1:961688955606:web:207603696292686f35b777"
};


 const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app); 