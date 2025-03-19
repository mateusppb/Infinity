contato = {
    "nome" : "",
    "telefone" : "",
    "email" : ""
}


print("Salvar contato".center(30, '='))
contato["nome"] = input("Digite o nome do contato: ")
contato["telefone"] = str(input("Digite o telefone do contato: "))
contato["email"] = input("Digite o email do contato: ")

print(f"Nome: {contato['nome']}")
print(f"Telefone: {contato['telefone']}")
print(f"Email: {contato['email']}")