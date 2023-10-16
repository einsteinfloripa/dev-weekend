
NOMES =    ['João', 'Maria', 'José', 'Ana', 'Pedro', 'Elisa', 'Carlos', 'Paula', 'Lucas', 'Luana']
IDADES =   [20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
MATERIAS = ['MATEMATICA', 'PORTUGUES', 'FISICA', 'QUIMICA', 'HISTORIA', 'GEOGRAFIA', 'INGLES', 'FISICA', 'BIOLOGIA', 'MATEMATICA']


class Docente():
    
    def __init__(self, nome, idade, materia):
        self.nome = nome
        self.idade = idade
        self.materia = materia



Banco_de_dados_docentes = []
for i in range(10):
    docente = Docente(NOMES[i], IDADES[i], MATERIAS[i])
    Banco_de_dados_docentes.append(docente)



# olhando para o codigo acima voce vera que Banco_de_dados_docentes é uma
# lista com objetos da classe Docente

# ------------------------------------------------------------------------------------

# Voce deve fazer uma funçao que recebe um dicionario onde a CHAVE representa o atributo
# de interesse (ex: "materia" ou "idade" ) e o VALOR representa o valores de interesse para
# aquele atributo (ex: "MATEMATICA", "HISTORIA", "20", "21", etc... )
# A funçao deve entao procurar na base de dados os docentes que possuem aqueles atributos
# e retorna-los em um dicionario.
#
# ATENÇÃO: Nao pode haver docentes duplicados na lista de saida
# Lembre que nada impede que sua funçao chame outras funçoes!!
# ------------------------------------------------------------------------------------

# Exemplo de dicionario de entrada:
#       { 
#           "materia" : [ "MATEMATICA", "HISTORIA", "QUIMICA" ] 
#       }

# Exemplo de lista de saida:
#     
#   [
#      {"nome":"João", "idade":"20", "disciplina":"MATEMATICA"},
#      {"nome":luana, "idade":"29", "disciplina":"MATEMATICA"},
#      {"nome":"Pedro", "idade":"24", "disciplina":"HISTORIA"},
#      {"nome":"Ana", "idade":"23", "disciplina":"QUIMICA"},
#   ]
#
# ------------------------------------------------------------------------------------
#
# Exemplo de dicionario de entrada:
#       {  
#           idade : 22
#       }
#
# Exemplo de lista de saida:
#   [
#      {"nome":"José", "idade":"22", "disciplina":"FISICA"},
#   ]
#       
# ------------------------------------------------------------------------------------
#
# Exemplo de dicionario de entrada:
#       { 
#           materia : [ ARTES, FISICA ], 
#           nome: [ João, Ana ] 
#       }
#
# Exemplo de lista de saida:
#       [
#           {"nome":"João", "idade":"20", "disciplina":"MATEMATICA"},
#           {"nome":"Ana", "idade":"23", "disciplina":"FISICA"},
#           {"nome":"Paula", "idade":"27", "disciplina":"FISICA"},
#       ]
# ------------------------------------------------------------------------------------
# CASO NAO EXISTA NENHUM DOCENTE VALIDO, RETORNE: []
# ------------------------------------------------------------------------------------
#

#######################################
# ESCREVA SEU CODIGO ABAIXO:




#######################################


##########################################
# TESTE SUA FUNCAO AQUI!
# Para testar sua funçao use o codigo abaixo:

# from Teste import TestaFuncao
# TestaFunçao("SUA FUNCAO AQUI!!(sem os parenteses!!!)" )
# Exemplo: TestaFunçao(ProcuraDocentes)
##########################################

