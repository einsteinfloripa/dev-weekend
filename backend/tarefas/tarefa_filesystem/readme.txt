Nessa tarefa voces vao aprendem a criar e ler aquivos:
    - Json
    - Txt
    - Imagens

Arquivos txt nao precisam de importaçao nenhuma para serem manipulados.
Arquivos json possuem modulos de manipulaçao na biblioteca padrao do python:
    O modulo json (import json)

Arquivos de imagens necessitam de bibliotecas externas para o pathon conseguir manipulalos
as algumas libs famosas sao Pillow e opencv.
No nosso caso iremos usar opencv

* Portanto o primeiro passo sera instalar a lib opencv
* ATENÇAO no comando de instalaçao voces devem usar o nome da lib como opencv-python



TAREFA
###########
A tarefa em si ira consistir em:

1. Abrir o arquivo json em "./backend/res/json_files/paths.json" e carregar o seu conteudo 
em uma variavael (sera um dicionario)

2. Usando o conteudo salvo anteriormente voce deve usar as variaveis de caminho para carrerar
as imagens usando a lib opencv 
( os caminhos sao caminhos relativos partindo da pasta DEV-WEEKEND )

3. Voce deve transforma a imagen em preto e branco usando a lib opencv

4. voce deve salvar as imagens em preto e branco dentro da pasta "./backend/output"
con os nomes anteriores seguidos de "_bw"


Dicas:
Lembrando que ao carregar o json voce tera um dicionario do seguinte modo:
{ 
    "nome_da_imagen" : "caminho_relativo_da_imagen",
    ...
}


Pathlib
Uma lib que ajudata voces a encontrar caminhos é a Pathlib, algumas funçoes uteis,
essa lib ja é padrao do python, nao precisa instalar nada

from Pathlib import Pathlib

Path.cwd() -> busca o diretorio que esta sendo considerado como raiz pra o seu arquivo python
(current working directory)

Path('./output/imgs').mkdir(parents=True, exist_ok=True) -> cria as pastas expecificadas
no casso acima criaria a pasta "output" e a pasta "imgs"
*** Outra maneida de escrever o codigo acima
path = Path('./output/imgs')
path.mkdir(parents=True, exist_ok=True)

(o '.' é onde esta o Path.cwd) 


Path("./output").resolve() -> busca o caminho completo ate a pasta output 

** para transformar em string, as vezes precisa para passar como argumento **

str_path = str(Path("output").resolve())