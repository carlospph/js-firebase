const formRegister = document.querySelector('#formRegister')
const inputNome = document.querySelector('#inputNome')
const inputEmail = document.querySelector('#inputEmail')
const inputPassword = document.querySelector('#inputPassword')
const inputConfirmPassword = document.querySelector('#inputConfirmPassword')

// Regex para validação de e-mail
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateFields(e) {
  e.preventDefault()

   if (inputNome.value.trim() === "" ||
    inputEmail.value.trim() === "" ||
    inputPassword.value.trim() === "" || 
    inputConfirmPassword.value.trim() === "") {
    alert("Todos os campos devem ser preenchidos")
    return 
  }

   if (!emailRegex.test(inputEmail.value)) {
    alert("Por favor, insira um e-mail válido")
    inputEmail.focus()
    return
  }

   if (inputPassword.value !== inputConfirmPassword.value) {
    alert("As senhas não conferem")
    return
  }

   alert("Cadastro validado com sucesso! Pronto para salvar no Firebase.")
   
}

 formRegister.addEventListener("submit", validateFields)