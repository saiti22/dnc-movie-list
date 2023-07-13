
# DNC-MOVIE-LIST

Este projeto é uma listagem de filmes para treinamento de API.


## Requisitos

Qualquer editor de código para React, HTML, CSS e JavaScript. 
O editor originalmente utilizado foi o VSCode.
## Stack utilizada

**Front-end:** React 18.2.0, HTML, CSS, JavaScript



## Funcionalidades

- Busca de filmes específicos por nome
- Buscar filme sem digitar nada no campo de busca traz a página inicial.
- Ver detalhes dos filmes


## Melhorias

- Foi adicionado o botão "Buscar" no header da aplicação, pois anteriormente a busca era feita somente ao pressionar 'ENTER' após preencher o campo, o que não era intuitivo.

## Histórico de versionamento

- Adiconado botão "Buscar" no header.
## Explicação das páginas

### Página inicial
- Na página inicial é possível ver os 20 filmes mais populares listados em cards. Clicando em 'Ver Detalhes', você será direcionado à página do filme selecionado com mais detalhes sobre o mesmo.
- Também é possível procurar um filme específico através do campo de busca no canto superior direito da tela. Digitando o nome do filme e clicando 'ENTER' ou no botão 'Buscar', a página será atualizada trazendo todos os filmes que se enquadram na busca.

### Página de detalhes
- Nesta página é possível ver os detalhes do filme selecionado, como: Budget, Original language, Popularity, Overview.
- E temos o botão 'Voltar', que volta a página anterior.