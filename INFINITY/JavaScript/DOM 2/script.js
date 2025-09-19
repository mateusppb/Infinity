const btn = document.getElementById("enviar");

btn.addEventListener("click", function(event){
    event.preventDefault();
    const nomeUser = document.getElementById("user").value;
    const senha = document.getElementById("senha").value;
    const telefone = document.getElementById("telefone").value;
    const dataNasc = document.getElementById("nascimento").value;
    const email = document.getElementById("email").value;

    if (nomeUser == "" ||senha == "" || telefone == "" || dataNasc == "" || email == ""){
        console.log("Error: Todos os campos têm preenchimento obrigatório!");
        return;
    }

    const campo = document.getElementById("container");
    const liUser = document.createElement("li");
    liUser.textContent = "Usuário: " + nomeUser;

    const liSenha = document.createElement("li");
    liSenha.textContent = "Senha: " + senha;

    const liTel = document.createElement("li");
    liTel.textContent = "Telefone: " + telefone;

    const liNasc = document.createElement("li");
    liNasc.textContent = "Nascimento: " + dataNasc;

    const liEmail = document.createElement("li");
    liEmail.textContent = "Email: " + email;

    const ul = document.createElement("ul");
    campo.appendChild(ul);
    ul.appendChild(liUser);
    ul.appendChild(liSenha);
    ul.appendChild(liTel);
    ul.appendChild(liNasc);
    ul.appendChild(liEmail);
});

const btnReset = document.getElementById("reset");

btnReset.addEventListener("click", function(event) {
    event.preventDefault();

    const container = document.getElementById("container");
    container.innerHTML = "";
});