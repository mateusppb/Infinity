import random
import time

def lancar_dados():
    dado1 = random.randint(1,6)
    print(f'Valor do primeiro dado {dado1}')
    time.sleep(1)
    dado2 = random.randint(1,6)
    print(f'Valor do segundo dado {dado2}')
    return dado1 + dado2

print('Jogando dados...')
time.sleep(0.5)
soma = lancar_dados()
print(f'a soma dos dados foi: {soma}')
