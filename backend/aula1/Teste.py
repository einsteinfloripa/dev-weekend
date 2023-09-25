import json
import random

def print_test(status, test, resposta, gabarito):
    print('----------------------------------')
    print(f'------------- {status} --------------')
    print('Teste: ', test)
    print('resposta: ', resposta)
    print('gabarito: ', gabarito)
    print('----------------------------------')


def TestaFuncao(funcao):
    with open('backend/aula1/tests.json', 'r') as f:
        tests = json.load(f)

    fails = []
    cont = 1
    for test in tests:
        status = 'PASS'
        resposta = funcao(test['test'])
        if resposta != test['resposta']:
            # fails.append(test['test'], test['resposta'], resposta)
            status = 'FAIL'
            print_test(status, test['test'], test['resposta'], resposta)
        else:
            print(f'Passou [{cont:02d}]')
        cont += 1

d1 = {'a':1, 'b':2}
d2 = {'b':2 ,'a':1}
l1 = [d1, d2]
l2 = [d2, d1]
print(l1 == l2)

# TESTANDO A FUNÇÃO ACIMA COM MOCK

# def mockfunc(_):

#     if not 'test_loaded' in globals():
#         with open('backend/aula1/tests.json', 'r') as f:
#             global Tests
#             global test_loaded
#             test_loaded = True
#             Tests = json.load(f)

#     resposta = Tests.pop(0)['resposta']
#     if random.randint(0, 10) == 10:
#         return '-- resposta errada --'
#     return resposta



# TestaFunçao(mockfunc)


# ESSE CODIGO FOI USADO PARA GERAR OS TESTES ALEATÓRIOS

# from Tarefa import NOMES, IDADES, MATERIAS, Banco_de_dados_docentes
# import random
# import json

# # GERANDO TESTES ALERATÓRIOS
# NUMERO_DE_TESTES = 50

# entrada = ['idade', 'materia']
# global tests
# tests = []

# # gera 5 testes aleatóreos
# for _ in range(NUMERO_DE_TESTES):
#     dicionario_de_entrada = {}
#     r = random.randint(1, 2)
#     atributos = random.sample(entrada, k=r)

#     for atr in atributos:
#         r = random.randint(1, 3)
#         if atr == 'idade':
#             dicionario_de_entrada[atr] = random.sample(IDADES, k=r)
#         elif atr == 'materia':
#             dicionario_de_entrada[atr] = random.sample(MATERIAS, k=r)

#     tests.append(dicionario_de_entrada)


# # GERANDO AS RESPOSTAS
# respostas = []
# for test in tests:
#     doc_list = []
#     for docente in Banco_de_dados_docentes:
#         if docente in doc_list:
#             continue

#         if 'idade' in test.keys():
#             if docente.idade in test['idade']:
#                 doc_list.append(docente)
#                 continue
#         if 'materia' in test.keys():
#             if docente.materia in test['materia']:
#                 doc_list.append(docente)
    
#     resposta = [{'nome':doc.nome, 'idade': doc.idade, 'materia': doc.materia} for doc in doc_list]
#     respostas.append(resposta)

# for i in range(len(tests)):
#     print('----------------------------------')
#     print('Teste: ', i)
#     for key, value in tests[i].items():
#         print(key, value)
#     print()
#     print('resposta: ', respostas[i])
#     print('----------------------------------')

# data = [{'test':test,'resposta':resposta} for resposta, test in zip(respostas, tests)]
# with open('tests.json', 'w') as f:
#     json.dump(data, f)