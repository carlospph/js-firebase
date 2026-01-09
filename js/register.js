const inputNome = document.querySelector("#inputNome").value
const inputEmail = document.querySelector("#inputEmail").value
const inputPassword = document.querySelector("#inputPassword").value
const btnSaveRegister = document.querySelector("btnSaveRegister")


function validateDatas(e){
    e.preventDefault()

    if(inputNome===""){
        console.log("Campos em branco")
    }
    else{
        console.log(`Preenchido: ${inputNome}`)
    }
}


//Adicionando o js ao formulário de cadastro