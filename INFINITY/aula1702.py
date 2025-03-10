class Imposto:
    def calcular(self, valor : float ):
        return 0
    
class Iss(Imposto):
    def calcular(self, valor : float):
        taxa = 0.06
        return valor * taxa

class Icms(Imposto):    
    def calcular(self, valor):
        taxa = 0.04
        return valor * taxa

valor_bruto = float(input('Digite o valor da nota: '))

valor_iss = Iss().calcular(valor_bruto)
valor_liquido = valor_bruto - valor_iss

print(valor_bruto)
print(valor_iss)
print(valor_liquido)

       
    

        