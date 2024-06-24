var form = document.getElementById("form")
var inputs = document.querySelectorAll(".input-form")
var spanErro = document.querySelectorAll(".span-required-error")

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateNome()
    validateSurNome()
    validateEmail()
    validateSenha()
    validateConfirmSenha()
})


function showErro(index){
    inputs[index].classList.add("border-red-600");
    spanErro[index].classList.add("block");
}

function hiddenErro(index){
    inputs[index].classList.remove("border-red-600");
    spanErro[index].classList.remove("block");
}

function validateNome(){
    if(inputs[0].value.length < 3){
        showErro(0);
    }else{
        hiddenErro(0)
    }
}
function validateSurNome(){
    if(inputs[1].value.length < 3){
        showErro(1);
    }else{
        hiddenErro(1)
    }
}

function validateEmail(){
    emailRegex = /^[\w-.]+@([\w-.]+\.)+[a-zA-Z]{2,}$/

    if(!emailRegex.test(inputs[2].value)){
        showErro(2);
    }else{
        hiddenErro(2)
    }
}

function validateSenha(){
    if(inputs[3].value.length < 8){
        showErro(3);
    }else{
        hiddenErro(3)
        validateConfirmSenha()
    }
}

function validateConfirmSenha(){
    if( inputs[3].value == inputs[4].value && inputs[4].value.length >= 8){
        hiddenErro(4)
    }else{
        showErro(4);
    }
}