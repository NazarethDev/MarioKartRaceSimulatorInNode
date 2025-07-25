# Simulador de Corridas Mario Kart

Projeto elaborado em bootcamp de Mobile Developer com a Dio! 

Elaborado 100% em JavaScript com node! 

## Como executar
Este é um projeto elaborado em JavaScript, no entanto, alguns recursos podem estar disponíveis através de execução via terminal, uma vez que o projeto possui importações que podem não ser compatíveis com o console de navegadores.

Tendo isso em consideração, realize o download do projeto em seu dispositivo com a linguagem JavaScript instalada, assim como o gerenciador de pacotes NPM instalado.

Com estes pré-requisitos atendidos, mais uma vez, ressalta-se a importância de que o programa seja executado no terminal, uma vez que IDE's - como o Visual Studio Code ao se usar a extensão 'Run Code'- não possuem em seu output recursos que disponibilizam a entrada de dados do usuário, como é requerido para que este programa funcione.

## Regras de negócio atendidas

Todas as regras de negócio foram aplicadas a esse projeto. Foram solicitado e atendido:

- O sistema recebe dois personagens para disputar a corrida em um objeto cada;

- No total, o jogo ocorre em 05 turnos distintos e aleatórios

- 03 tipos de pistas, reta, curva e confronto:

    - Reta: cada jogador sorteia um número em um dado de 06 lados. Após isso, soma-se o resultado ao atributo velocidade dos personagens de acordo com os números que cada um sorteou. O que termina com a maior velocidade, ganha um ponto;

    - Curva: cada jogador sorteia um número em um dado de 06 lados. Após isso, soma-se o resultado ao atributo manobramanobrabilidade dos personagens de acordo com os números que cada um sorteou. O que termina com a maior manobrabilidade, ganha um ponto;

    - Confronto: cada jogador sorteia um número em um dado de 06 lados. Após isso, soma-se o resultado ao atributo poder dos personagens de acordo com os números que cada um sorteou. O que termina com o poder de menor valor, perde um ponto.

- Requisito de vitória foi atendido, sendo o jogador campeão definido pela quantidade total de pontos que possuem. O participante que tem mais pontos no final dos 05 turnos, vence o jogo.

## Adicções e alterações realizadas no projeto proposto no Bootcamp

Além dos requisitos exigidos, novas funcionalidades foram adicionadas, entre elas: 

- Seleção dos personagens: os participantes da corrida podem ser selecionados por meio do terminal, assim aumentando a interatividade do projeto com o usuário

- Menu de seleção dos personagens: Como a seleção de personagens pelo usuário foi disponibilizada, fez-se necessário a impressão dos nomes dos usuários e seus atributos.

- Refatoração de objetos: os personagens foram refatorados no códido para dentro da array players. Desta maneira, se tornou mais simples a adição de novos personagens ao código no futuro, além da utilidade na apresentação e seleção dos personagens para a seleção dos usuários. 

- Mais logs por rodada: logs que apresentam os empates nas corridas foram aplicados a todos os tipos de pistas, além de correção para os logs de vitória nas pistas do tipo 'confronto'. 

### Contato do desenvolvedor

Sinta-se a vontade para entrar em contrato comigo sobre esse projeto, oportunidades de desenvolvimento ou outros assuntos! 

LinkedIn: https://www.linkedin.com/in/lorrannazareth/

Email: lorran.nazareth@gmail.com