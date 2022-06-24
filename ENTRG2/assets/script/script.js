var nome = window.document.getElementById('nome')
var email = document.querySelector('#email')
var assunto = document.getElementById('#assunto')
var nomeOk = false;
var emailOk = false;
var assuntoOk = false;

function validarNome(){
    let TxtNome = document.querySelector('#TxtNome')
    if(nome.value.length < 2){
         TxtNome.innerHTML = 'Nome inválido!'
         TxtNome.style.color = 'red'
         nomeOk = false
    }else{
        TxtNome.innerHTML = 'Nome válido!'
        TxtNome.style.color = 'green'
        nomeOk = true
    }
}

function validarEmail(){
    let TxtEmail = document.querySelector('#TxtEmail')
    if(email.value.indexOf('@') > 0 && email.value.indexOf('.') > 0){
            TxtEmail.innerHTML = 'Email válido!'
            TxtEmail.style.color = 'green'  
            emailOk = true   
    }else{
        TxtEmail.innerHTML = 'Email inválido!'
        TxtEmail.style.color = 'red'  
        emailOk = false
    }
}

function TemAssunto(){
    let TxtAssunto = document.querySelector('#TxtAssunto')
    if(assunto.value.length > 1){
         TxtAssunto.innerHTML = ' inválido!'
         TxtAssunto.style.color = 'red'
         assuntoOk = true
    }else{
        TxtAssunto.innerHTML = 'e válido!'
        TxtAssunto.style.color = 'green'
        assuntoOk = false
    }
}


function Enviar(){
    if(nomeOk == true && emailOk == true){
        alert('preenchido corretamente, enviado!!')
    }else{
        alert('preencha o campo corretamente!')
    }
}

