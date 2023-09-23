

class Teste:

    atributo1 = 'valor1'
    atributo2 = 'valor2'


cl = Teste

print(cl.atributo1)

di = {'chave1': 'valor1', 'chave2': 'valor2'}

li = ['valor1', 'valor2']

exemplo = [
    {'key1':'valor1', 'key2':'valor2'},
    {'key1':'valor1', 'key2':'valor2'}
]


for key, value in di.items():
    print('dict', key, value)

for value in li:
    print('list', value)

