num_alunos = int(input('Digite o número de alunos: '))
notas = []
media_geral = 0


for i in range(num_alunos):
    soma_notas = 0
    nome = input('Digite o nome do aluno: ')

    for j in range(3):
        nota = int(input(f'Digite a nota {j+1}: '))
        notas.append(nota)
        soma_notas += nota

    media = float(soma_notas/3)
    print(f'Aluno: {nome}')

    x = 1
    for k in notas:
        print(f'Nota {x}: {k}')
        x += 1

    print(f'Média: {media}')

    if (media) >= 7:
        print('APROVADO')
    else:
        print('REPROVADO')

    media_geral += media

print(f'Média da turma: {media_geral/num_alunos}')

    