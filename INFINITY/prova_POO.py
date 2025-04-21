class Animal:
    def falar(self):
        print("Esse animal faz um som.")

class Cachorro(Animal):
    def falar(self):
        print("O cachorro late.")

class Gato(Animal):
    def falar(self):
        print("O gato mia.")


animal1 = Animal()
animal1.falar()

#testando a sobreposição do metodo falar()
a2 = Cachorro()
a2.falar()
a3 = Gato()
a3.falar()