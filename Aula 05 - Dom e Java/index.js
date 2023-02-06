function register(element){
    const usarname = element.childen.usarname.value
    const password = element.childen.password.value
    const passwordConfirmation = element.childen.passwordConfirmation.value

    console.log(usarname,password,passwordConfirmation)

    if(password === passwordConfirmation){
        alert("Usuario: " + usarname + " registrado!")
    }else{
        alert("Senha diferentes.")
    }

}