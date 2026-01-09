const formRegister = document.querySelector('#formRegister')
const inputNome = document.querySelector('#inputNome')
const inputEmail = document.querySelector('#inputEmail')
const inputPassword = document.querySelector('#inputPassword')
const inputConfirmPassword = document.querySelector('#inputConfirmPassword')

const btnSaveRegister = document.querySelector('#btnSaveRegister')

function validateFields(e) {
  e.preventDefault()

  if (inputNome.value.trim() === "" ||
    inputEmail.value.trim() === "" ||
    inputPassword.value.trim() === "" || inputConfirmPassword.value.trim() === "") {
    alert("Campo deve ser preenchido")
  }

  else if (inputPassword.value !== inputConfirmPassword.value) {
    alert("Senhas não conferem")
  }

  else {
    alert("Preenchido...")
  }
}

btnSaveRegister.addEventListener("click", validateFields)