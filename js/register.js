const inputNome = document.querySelector("#inputNome")
const inputEmail = document.querySelector("#inputEmail")
const inputPassword = document.querySelector("#inputPassword")
const btnSaveRegister = document.querySelector("#btnSaveRegister")


function validateDatas(e){
    e.preventDefault()

    if(inputNome.value.trim()==="" || inputEmail.value.trim()==="" || inputPassword.value.trim()===""){
        console.log("Campos em branco")
    }
    else{
        console.log(`Preenchido: ${inputNome.value}`)
    }
}

btnSaveRegister.addEventListener('click', validateDatas)


//Adicionando o js ao formulário de cadastro