const inputNome = document.querySelector("#inputNome")
const inputEmail = document.querySelector("#inputEmail")
const inputPassword = document.querySelector("#inputPassword")
const btnSaveRegister = document.querySelector("#btnSaveRegister")


function validateDatas(e){
    e.preventDefault()

    if(inputNome.value===""){
        console.log("Campos em branco")
    }
    else{
        console.log(`Preenchido: ${inputNome}`)
    }
}

btnSaveRegister.addEventListener('click', validateDatas)


//Adicionando o js ao formulário de cadastro