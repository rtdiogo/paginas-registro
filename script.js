function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "123456"){
        alert('sucesso!');
        location.href = "page2.html";
    }else{
        alert('dados inválidos!');
    }
}