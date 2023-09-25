    
#EXEMPLO DE DICIONARIO
di = {'chave1': 'valor1', 'chave2': 'valor2'}

#adicionar um elemento no dicionario
di['chave3'] = 'valor3'
#ou
di.update({'chave4': 'valor4'})

#mudar um elemento do dicionario
di['chave1'] = 'valor0'
#ou
di.update({'chave2': 'valor00'})

#remover um elemento do dicionario
del di['chave2']

#mostrar todos os pares chave, valor do dicionario
for key, value in di.items():
    print('dict:  ', key, value)
print('dict: (somente as chaves) ', di.keys())
print('dict: (somente os valores) ', di.values())

#espaço
print()




#EXEMPLO LISTAS
li = ['valor1', 'valor2']

#adicionar um elemento no final lista
li.append('valor3')

#mudar um elemento da lista
li[0] = 'valor0'

#remover um elemento da lista
li.remove('valor2')

#mostrar os elementos da lista
for value in li:
    print('list:  ', value)

#espaço
print()




# CLASSES
class Teste:
    # Essa funçao init diz quais variavais a classe precisa receber para ser criada
    # no nosso caso, a classe Teste precisa receber 2 variaveis, atr1 e atr2
    # e podem ser qualquer variavel (int, str, list, dict, etc)
    # ignorem o self por enquanto
    def __init__(self, atr1, atr2):
        self.atributo1 = atr1
        self.atributo2 = atr2


# criando um objeto da classe Teste
objeto1 = Teste('atr 1', 'atr 2')
objeto2 = Teste({'um':1, 'dois':2}, ['valor1', 'valor2'])

# acessando os atributos do objeto e imprimindo na tela
print('objeto1.atributo1:   ', objeto1.atributo1)
print('objeto1.atriburo2    ', objeto1.atributo2)

# usando as funçoes do dic e da lista
print('objeto2.atr1:')
for key, value in objeto2.atributo1.items():
    print(key, value)

print()

print('objeto2.atr2:')
for value in objeto2.atributo2:
    print(value)



## Exemplo de possiveis configurações de objetos json (as mais comuns)

#fora lista dentro dicionario
pessoas = [
    {'nome':'Tobias', 'idade':'70'},
    {'nome':'Armando', 'idade':'32'}
]

# fora dicionario dentro lista
salas = {
    "Predio 1" : ["101", "102"],
    "Predio 2" : ["205", "207", "304"]
}

# fora dicionario meio lista dentro dicionario
docente = {
    "professores" : [
        {"nome":"Maria", "idade":"50", "disciplina":"Matematica"},
        {"nome":"João", "idade":"60", "disciplina":"Portugues"}
    ],
    "monitores" : [
        {"nome":"Tobias", "idade":"70", "disciplina":"Matematica"},
        {"nome":"Armando", "idade":"32", "disciplina":"Portugues"}
    ]
}


